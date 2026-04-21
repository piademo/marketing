import crypto from 'node:crypto';

const COOKIE_NAME = 'site_lock';
const DEFAULT_PUBLIC_HOSTS = ['bookfast.es', 'www.bookfast.es'];

export function getSiteLockCookieName() {
  return COOKIE_NAME;
}

function parseHosts(raw: string | undefined) {
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

function base64UrlEncode(buf: Buffer) {
  return buf
    .toString('base64')
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '');
}

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

function hmacSha256Base64Url(secret: string, payload: string) {
  const sig = crypto.createHmac('sha256', secret).update(payload).digest();
  return base64UrlEncode(sig);
}

export function isValidUnlockToken(token: string, secret: string) {
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
  const expectedSig = hmacSha256Base64Url(secret, payload);
  return safeEqual(sig, expectedSig);
}

export function shouldLockForHost(hostHeader: string | null | undefined) {
  const hostWithPort = (hostHeader ?? '').trim();
  const hostname = hostWithPort.split(':')[0].toLowerCase();
  if (!hostname) return false;

  // En local nunca bloqueamos (para desarrollo).
  if (isLocalHost(hostname)) return false;

  const publicHosts = parseHosts(process.env.SITE_LOCK_HOSTS);
  const isPublicHost = publicHosts.includes(hostname);
  if (!isPublicHost) return false;

  /**
   * Seguridad "fail-closed":
   * - En producción, en hosts públicos, bloqueamos por defecto.
   * - Para desactivar explícitamente el bloqueo: SITE_LOCK_ENABLED=false
   * - En local se ignora igualmente.
   */
  const enabledEnv = process.env.SITE_LOCK_ENABLED;
  if (enabledEnv === 'false') return false;

  const isProd = process.env.NODE_ENV === 'production';
  if (isProd) return true;

  // En no-producción, solo bloqueamos si lo activas explícitamente.
  return enabledEnv === 'true';
}

