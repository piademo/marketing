import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { getStripe } from '@/lib/billing/stripe';
import { getStripeWebhookSecret } from '@/lib/billing/env';
import { getSupabaseServiceClient, slugify } from '@/lib/billing/supabase';

export const dynamic = 'force-dynamic';

function randomSuffix(len = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let out = '';
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

async function ensureUniqueSlug(base: string) {
  const s = getSupabaseServiceClient();
  const baseSlug = slugify(base) || `bookfast-${randomSuffix(6)}`;

  for (let i = 0; i < 5; i++) {
    const candidate = i === 0 ? baseSlug : `${baseSlug}-${randomSuffix(4)}`;
    const { data } = await s.from('tenants').select('id').eq('slug', candidate).maybeSingle();
    if (!data) return candidate;
  }

  return `${baseSlug}-${randomSuffix(8)}`;
}

async function markEventProcessed(eventId: string, eventType: string) {
  const s = getSupabaseServiceClient();
  // Tabla existente en platform: public.stripe_events_processed (PK = event_id)
  await s
    .from('stripe_events_processed')
    .upsert({ event_id: eventId, event_type: eventType } as any, { onConflict: 'event_id' });
}

async function alreadyProcessed(eventId: string) {
  const s = getSupabaseServiceClient();
  const { data } = await s.from('stripe_events_processed').select('event_id').eq('event_id', eventId).maybeSingle();
  return Boolean(data?.event_id);
}

async function upsertTenantFromSession(session: any) {
  const businessName = String(session?.metadata?.business_name ?? '').trim();
  const email = String(session?.customer_details?.email ?? session?.customer_email ?? '').trim().toLowerCase();
  const planKey = String(session?.metadata?.plan_key ?? '').trim() || null;
  const billingPeriod = String(session?.metadata?.billing_period ?? '').trim() || null;
  const addonsRaw = String(session?.metadata?.addons ?? '[]');

  if (!businessName || !email) return null;

  const s = getSupabaseServiceClient();
  const slug = await ensureUniqueSlug(businessName);

  // Si ya existe un tenant con ese email de contacto, lo reutilizamos (mejor esfuerzo).
  const existing = await s
    .from('tenants')
    .select('id,slug,name,contact_email')
    .eq('contact_email', email)
    .maybeSingle();

  const tenant =
    existing.data ??
    (
      await s
        .from('tenants')
        .insert(
          {
            name: businessName,
            slug,
            timezone: 'Europe/Madrid',
            contact_email: email,
            portal_url: `/r/${slug}`,
          } as any,
        )
        .select('id,slug,name,contact_email')
        .single()
    ).data;

  if (!tenant?.id) return null;

  // tenant_settings best-effort
  await s.from('tenant_settings').upsert({ tenant_id: tenant.id } as any, { onConflict: 'tenant_id' });

  return { tenant, planKey, billingPeriod, addonsRaw };
}

async function setOrgPlanBestEffort(tenantId: string, planKey: string | null) {
  if (!planKey) return;
  const s = getSupabaseServiceClient();

  // Preferimos RPC pública (si existe en el proyecto) para no depender de exponer schema platform.
  const { error } = await s.rpc('admin_set_org_plan' as any, {
    p_org_id: tenantId,
    p_plan_key: planKey,
    p_billing_state: 'active',
  } as any);

  if (!error) return;

  // Fallback: si la RPC no existe, no bloqueamos el alta (pero quedará pendiente de asignar plan).
}

export async function POST(req: Request) {
  const stripe = getStripe();
  const sig = (await headers()).get('stripe-signature');
  if (!sig) return NextResponse.json({ error: 'Missing stripe-signature' }, { status: 400 });

  const raw = await req.text();
  let event: any;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, getStripeWebhookSecret());
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook signature verification failed: ${err?.message ?? 'unknown'}` }, { status: 400 });
  }

  try {
    // Idempotencia (best-effort)
    if (await alreadyProcessed(event.id)) {
      return NextResponse.json({ received: true, duplicate: true });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Solo nos interesa la suscripción
      if (session?.mode === 'subscription') {
        const enriched = await stripe.checkout.sessions.retrieve(session.id, {
          expand: ['customer', 'subscription'],
        });

        const result = await upsertTenantFromSession(enriched);
        if (result?.tenant?.id) {
          await setOrgPlanBestEffort(result.tenant.id, result.planKey);
        }
      }
    }

    await markEventProcessed(event.id, event.type);
    return NextResponse.json({ received: true });
  } catch (e: any) {
    // Aun si falla, dejamos constancia para no buclear (pero idealmente guardaríamos failed_count)
    await markEventProcessed(event.id, `failed:${event.type}`);
    return NextResponse.json({ error: e?.message ?? 'Webhook error' }, { status: 500 });
  }
}

