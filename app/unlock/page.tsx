import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import crypto from 'node:crypto';

const COOKIE_NAME = 'site_lock';

type SearchParams = {
  next?: string | string[];
  error?: string | string[];
};

function base64UrlEncode(buf: Buffer) {
  return buf
    .toString('base64')
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '');
}

function signToken(secret: string, payload: string) {
  const sig = crypto.createHmac('sha256', secret).update(payload).digest();
  return base64UrlEncode(sig);
}

function createUnlockToken(secret: string, ttlSeconds: number) {
  const now = Math.floor(Date.now() / 1000);
  const exp = now + ttlSeconds;
  const nonce = base64UrlEncode(crypto.randomBytes(16));
  const payload = `v1.${exp}.${nonce}`;
  const sig = signToken(secret, payload);
  return `${payload}.${sig}`;
}

export default async function UnlockPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const next = typeof sp.next === 'string' ? sp.next : '/';

  async function unlock(formData: FormData) {
    'use server';

    const key = String(formData.get('key') ?? '');
    const expected = process.env.SITE_LOCK_KEY ?? '';
    const secret = process.env.SITE_LOCK_SECRET ?? '';

    if (!expected || key !== expected) {
      redirect(`/unlock?next=${encodeURIComponent(next)}&error=1`);
    }

    const isProd = process.env.NODE_ENV === 'production';
    const cookieStore = await cookies();
    const tokenTtl = 60 * 60 * 24 * 30; // 30 días

    const signingSecret = secret || expected;
    const token = createUnlockToken(signingSecret, tokenTtl);

    cookieStore.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      sameSite: 'strict',
      secure: isProd,
      path: '/',
      maxAge: tokenTtl,
    });

    redirect(next);
  }

  const hasError = sp.error === '1';

  return (
    <section className="section">
      <div className="container-narrow">
        <div className="card">
          <h1 className="text-3xl sm:text-4xl">Desbloquear</h1>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            Introduce la clave de acceso para poder ver el sitio.
          </p>

          <form action={unlock} className="mt-6 space-y-4">
            <div>
              <label className="label" htmlFor="key">
                Clave
              </label>
              <input
                id="key"
                name="key"
                type="password"
                className="input"
                autoComplete="current-password"
                required
              />
            </div>

            {hasError ? (
              <p className="text-sm text-red-600 dark:text-red-400">
                Clave incorrecta.
              </p>
            ) : null}

            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </form>

          <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
            Destino tras desbloquear:{' '}
            <span className="font-mono break-all">{next}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

