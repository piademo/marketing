import type { AddonKey, BillingPeriod, PlanKey } from './plans';

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name}`);
  const trimmed = v.trim();
  // Por seguridad ante copy/paste en Vercel: permitir valores envueltos en comillas.
  return trimmed.replace(/^["'](.+)["']$/, '$1');
}

export function getMarketingBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_MARKETING_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    'http://localhost:3000'
  );
}

export function getPlanPriceId(plan: Exclude<PlanKey, 'free' | 'enterprise'>, period: BillingPeriod) {
  const key = `STRIPE_PRICE_${plan.toUpperCase()}_${period.toUpperCase()}` as const;
  return requireEnv(key);
}

export function getAddonPriceId(addon: AddonKey) {
  const key = `STRIPE_ADDON_PRICE_${addon.toUpperCase()}` as const;
  return requireEnv(key);
}

export function getStripeWebhookSecret() {
  return requireEnv('STRIPE_WEBHOOK_SECRET');
}

export function getSupabaseUrl() {
  return requireEnv('SUPABASE_URL');
}

export function getSupabaseServiceRoleKey() {
  return requireEnv('SUPABASE_SERVICE_ROLE_KEY');
}

