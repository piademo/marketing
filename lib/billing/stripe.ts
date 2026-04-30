import Stripe from 'stripe';

let stripeSingleton: Stripe | null = null;

export function getStripe() {
  if (stripeSingleton) return stripeSingleton;

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error('Missing STRIPE_SECRET_KEY');
  }

  stripeSingleton = new Stripe(secretKey, {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    apiVersion: (process.env.STRIPE_API_VERSION as any) ?? '2026-01-28.clover',
    typescript: true,
  });

  return stripeSingleton;
}

