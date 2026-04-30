export type BillingPeriod = 'monthly' | 'yearly';

export type PlanKey = 'free' | 'starter' | 'professional' | 'scale' | 'enterprise';

export type AddonKey = 'whatsapp_pack' | 'sms' | 'payments' | 'white_label' | 'ai';

export const PLAN_LABELS: Record<PlanKey, string> = {
  free: 'Free',
  starter: 'Starter',
  professional: 'Professional',
  scale: 'Scale',
  enterprise: 'Enterprise',
};

export const ADDON_LABELS: Record<AddonKey, string> = {
  whatsapp_pack: 'WhatsApp Pack',
  sms: 'SMS',
  payments: 'Pagos online + depósitos',
  white_label: 'White‑label',
  ai: 'Asistente IA',
};

export const ALLOWED_PLANS_FOR_CHECKOUT: PlanKey[] = [
  'starter',
  'professional',
  'scale',
];

export const ALLOWED_ADDONS: AddonKey[] = [
  'whatsapp_pack',
  'sms',
  'payments',
  'white_label',
  'ai',
];

