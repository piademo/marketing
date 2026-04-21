import { NextResponse, type NextRequest } from 'next/server';

const COOKIE_NAME = 'site_lock';
const DEFAULT_PUBLIC_HOSTS = ['bookfast.es', 'www.bookfast.es'];

function isLockEnabled() {
  return process.env.SITE_LOCK_ENABLED === 'true';
}

function getLockKey() {
  return process.env.SITE_LOCK_KEY ?? '';
}

function getLockSecret() {
  // Preferimos un secreto distinto para firmar tokens. Si no existe, caemos a la clave humana (menos ideal, pero funcional).
  return process.env.SITE_LOCK_SECRET ?? '';
}

function getPublicHosts(): string[] {
  const raw = process.env.SITE_LOCK_HOSTS;
  if (!raw) return DEFAULT_PUBLIC_HOSTS;
  return raw
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

function isLocalHost(hostname: string) {
  const h = hostname.toLowerCase();
  return h === 'localhost' || h === '127.0.0.1' || h === '::1';
}

function isPublicFile(pathname: string) {
  return Boolean(pathname.match(/\.(?:png|jpg|jpeg|gif|webp|svg|ico|txt|xml|json|map|css|js)$/i));
}

function base64UrlToBytes(base64url: string) {
  const pad = '='.repeat((4 - (base64url.length % 4)) % 4);
  const base64 = (base64url + pad).replaceAll('-', '+').replaceAll('_', '/');
  const bin = atob(base64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function constantTimeEqual(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function hmacSha256Base64Url(secret: string, payload: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  const bytes = new Uint8Array(sig);
  let str = '';
  for (const byte of bytes) str += String.fromCharCode(byte);
  const b64 = btoa(str).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
  return b64;
}

async function isValidUnlockToken(token: string, secret: string) {
  // Formato: v1.<exp>.<nonce>.<sig>
  const parts = token.split('.');
  if (parts.length !== 4) return false;
  const [v, expStr, nonce, sig] = parts;
  if (v !== 'v1' || !nonce || !sig) return false;

  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp <= 0) return false;

  const now = Math.floor(Date.now() / 1000);
  if (now > exp) return false;

  const payload = `${v}.${expStr}.${nonce}`;
  const expectedSig = await hmacSha256Base64Url(secret, payload);
  return constantTimeEqual(base64UrlToBytes(sig), base64UrlToBytes(expectedSig));
}

export async function middleware(req: NextRequest) {
  if (!isLockEnabled()) return NextResponse.next();

  const lockKey = getLockKey();
  // Si no hay clave configurada, mejor no bloquear para evitar dejar el sitio inaccesible por error.
  if (!lockKey) return NextResponse.next();

  const lockSecret = getLockSecret() || lockKey;

  // En local (localhost / 127.0.0.1) nunca bloqueamos para permitir desarrollo.
  const hostname = req.nextUrl.hostname;
  if (isLocalHost(hostname)) return NextResponse.next();

  // Solo bloqueamos en los hosts públicos configurados (por defecto: bookfast.es, www.bookfast.es).
  const publicHosts = getPublicHosts();
  const host = hostname.toLowerCase();
  if (!publicHosts.includes(host)) return NextResponse.next();

  const { pathname, search } = req.nextUrl;

  // No bloquear assets internos, endpoints API o archivos públicos.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/locked' ||
    pathname === '/unlock' ||
    isPublicFile(pathname)
  ) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(COOKIE_NAME)?.value ?? '';
  // Token firmado (preferido). Por compatibilidad, aceptamos el formato antiguo (cookie == lockKey) solo en local,
  // pero en host público exigimos token firmado.
  if (cookie) {
    if (await isValidUnlockToken(cookie, lockSecret)) return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = '/locked';
  url.searchParams.set('next', pathname + search);

  const res = NextResponse.redirect(url);
  // Evita indexación accidental cuando está bloqueado.
  res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  return res;
}

export const config = {
  matcher: [
    /*
     * Aplica a todo menos a:
     * - rutas internas de Next
     * - API routes
     * - archivos estáticos comunes (manejados en runtime por isPublicFile igualmente)
     */
    '/((?!_next/|api/).*)',
  ],
};

