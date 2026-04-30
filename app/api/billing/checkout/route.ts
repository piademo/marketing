import { NextResponse } from 'next/server';
import { getMarketingBaseUrl, getPlanPriceId, getAddonPriceId } from '@/lib/billing/env';
import { getStripe } from '@/lib/billing/stripe';
import {
  ALLOWED_ADDONS,
  ALLOWED_PLANS_FOR_CHECKOUT,
  type AddonKey,
  type BillingPeriod,
  type PlanKey,
} from '@/lib/billing/plans';

export const dynamic = 'force-dynamic';

function stripeModeFromKey(secretKey: string | undefined) {
  if (!secretKey) return 'unknown';
  if (secretKey.startsWith('sk_test_')) return 'test';
  if (secretKey.startsWith('sk_live_')) return 'live';
  return 'unknown';
}

type CheckoutRequest = {
  planKey: PlanKey;
  billingPeriod: BillingPeriod;
  addons?: AddonKey[];
  businessName: string;
  email: string;
  offer?: 'early_adopters' | null;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CheckoutRequest;

    const planKey = body.planKey;
    const billingPeriod = body.billingPeriod;
    const businessName = String(body.businessName ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();
    const addons = Array.isArray(body.addons) ? body.addons : [];
    const offer = body.offer ?? null;

    if (!ALLOWED_PLANS_FOR_CHECKOUT.includes(planKey as any)) {
      return NextResponse.json({ error: 'Plan no válido para checkout' }, { status: 400 });
    }
    if (billingPeriod !== 'monthly' && billingPeriod !== 'yearly') {
      return NextResponse.json({ error: 'Periodo de facturación no válido' }, { status: 400 });
    }
    if (!businessName || businessName.length < 2) {
      return NextResponse.json({ error: 'Nombre de negocio requerido' }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Email no válido' }, { status: 400 });
    }

    const cleanAddons = Array.from(new Set(addons)).filter((a): a is AddonKey =>
      (ALLOWED_ADDONS as string[]).includes(a),
    );

    const stripe = getStripe();
    const baseUrl = getMarketingBaseUrl();

    const planPriceId = getPlanPriceId(
      planKey as Exclude<PlanKey, 'free' | 'enterprise'>,
      billingPeriod,
    );
    const addonPriceIds = cleanAddons.map((addon) => getAddonPriceId(addon));

    // Validación previa: si el price no existe en esta cuenta/mode, devolvemos un error claro.
    // Esto evita 500 opacos y acelera el debugging de TEST vs LIVE / cuenta equivocada.
    try {
      await stripe.prices.retrieve(planPriceId);
      await Promise.all(addonPriceIds.map((pid) => stripe.prices.retrieve(pid)));
    } catch (e: any) {
      const mode = stripeModeFromKey(process.env.STRIPE_SECRET_KEY);
      const msg = e?.message ?? 'Stripe price inválido';
      return NextResponse.json(
        {
          error: `Stripe (${mode}): ${msg}`,
          details: {
            planKey,
            billingPeriod,
            planPriceId,
            addonPriceIds,
          },
        },
        { status: 400 },
      );
    }

    const lineItems = [
      { price: planPriceId, quantity: 1 },
      ...addonPriceIds.map((pid) => ({ price: pid, quantity: 1 })),
    ];

    const earlyCoupon = process.env.STRIPE_COUPON_EARLY_ADOPTERS || '';
    const discounts =
      offer === 'early_adopters' && earlyCoupon
        ? [{ coupon: earlyCoupon }]
        : undefined;

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: lineItems,
      customer_email: email,
      allow_promotion_codes: true,
      discounts,
      billing_address_collection: 'auto',
      tax_id_collection: { enabled: true },
      success_url: `${baseUrl}/alta/confirmada?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/alta?canceled=1`,
      metadata: {
        source: 'marketing_signup',
        plan_key: planKey,
        billing_period: billingPeriod,
        business_name: businessName,
        addons: JSON.stringify(cleanAddons),
        offer: offer ?? '',
      },
      subscription_data: {
        metadata: {
          plan_key: planKey,
          billing_period: billingPeriod,
          business_name: businessName,
          addons: JSON.stringify(cleanAddons),
          offer: offer ?? '',
        },
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: 'No se pudo iniciar el checkout' }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    // Log server-side para que aparezca en runtime logs (Vercel).
    // No exponemos stacktrace al cliente, solo el mensaje.
    // eslint-disable-next-line no-console
    console.error('checkout_error', e);
    return NextResponse.json({ error: e?.message ?? 'Error creando checkout' }, { status: 500 });
  }
}

