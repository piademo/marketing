'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Check, Loader2 } from 'lucide-react';
import { ADDON_LABELS, PLAN_LABELS, type AddonKey, type BillingPeriod, type PlanKey } from '@/lib/billing/plans';

const PLANS: Array<{
  key: PlanKey;
  description: string;
  priceLabel: { monthly: string; yearly: string };
  features: string[];
}> = [
  {
    key: 'starter',
    description: 'Para empezar y profesionalizar reservas.',
    priceLabel: { monthly: '29€/mes', yearly: '348€/año' },
    features: ['1 profesional', 'Reservas online', 'Email automático'],
  },
  {
    key: 'professional',
    description: 'El plan recomendado para equipos.',
    priceLabel: { monthly: '79€/mes', yearly: '790€/año' },
    features: ['Hasta 5 profesionales', 'WhatsApp automático', 'Pagos y depósitos'],
  },
  {
    key: 'scale',
    description: 'Para equipos grandes y reporting avanzado.',
    priceLabel: { monthly: '199€/mes', yearly: '2.388€/año' },
    features: ['Hasta 15 profesionales', '1 local incluido', 'Onboarding asistido'],
  },
];

const ADDONS: Array<{ key: AddonKey; description: string }> = [
  { key: 'whatsapp_pack', description: 'Packs por consumo para recordatorios y campañas.' },
  { key: 'sms', description: 'Mensajería por consumo para confirmaciones y recordatorios.' },
  { key: 'payments', description: 'Activa pagos online y depósitos (incluido en Pro+).' },
  { key: 'white_label', description: 'Widget sin marca + dominio propio (opcional).' },
  { key: 'ai', description: 'Automatizaciones con IA (con límites/presupuesto).' },
];

export default function AltaClient() {
  const sp = useSearchParams();
  const preselected = (sp.get('plan') ?? '').toLowerCase() as PlanKey;

  const [planKey, setPlanKey] = useState<PlanKey>(
    PLANS.some((p) => p.key === preselected) ? preselected : 'professional',
  );
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const [addons, setAddons] = useState<AddonKey[]>([]);
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const plan = useMemo(() => PLANS.find((p) => p.key === planKey)!, [planKey]);

  const toggleAddon = (key: AddonKey) => {
    setAddons((prev) => (prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]));
  };

  const onCheckout = async () => {
    setError(null);
    const bn = businessName.trim();
    const em = email.trim().toLowerCase();
    if (!bn) return setError('Dinos el nombre de tu negocio.');
    if (!em) return setError('Dinos tu email.');

    setLoading(true);
    try {
      const res = await fetch('/api/billing/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planKey,
          billingPeriod,
          addons,
          businessName: bn,
          email: em,
        }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok) throw new Error(data?.error || 'No se pudo iniciar el checkout');
      if (!data?.url) throw new Error('Stripe no devolvió URL de checkout');
      window.location.href = data.url;
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Error inesperado');
      setLoading(false);
    }
  };

  return (
    <section className="pt-10 pb-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h1 className="text-display-sm sm:text-display-md mb-3 text-foreground dark:text-white">
            Activa tu suscripción en 60 segundos
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Solo te pedimos lo esencial. El resto (facturación y método de pago) lo completas en Stripe.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2">
          {/* Left: plan selection */}
          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6 dark:border-neutral-800 dark:bg-neutral-900/70">
              <div className="flex items-center justify-between gap-3 mb-4">
                <p className="font-semibold text-foreground dark:text-white">Plan</p>
                <div className="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    className={billingPeriod === 'monthly' ? 'font-semibold text-foreground' : 'text-neutral-500'}
                    onClick={() => setBillingPeriod('monthly')}
                  >
                    Mensual
                  </button>
                  <span className="text-neutral-400">/</span>
                  <button
                    type="button"
                    className={billingPeriod === 'yearly' ? 'font-semibold text-foreground' : 'text-neutral-500'}
                    onClick={() => setBillingPeriod('yearly')}
                  >
                    Anual
                  </button>
                </div>
              </div>

              <div className="grid gap-3">
                {PLANS.map((p) => {
                  const active = p.key === planKey;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setPlanKey(p.key)}
                      className={`text-left rounded-2xl border p-4 transition ${
                        active
                          ? 'border-primary/60 bg-primary/5'
                          : 'border-border bg-background/30 hover:bg-background/60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-foreground dark:text-white">{PLAN_LABELS[p.key]}</p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
                        </div>
                        <p className="text-sm font-semibold text-foreground dark:text-white whitespace-nowrap">
                          {billingPeriod === 'monthly' ? p.priceLabel.monthly : p.priceLabel.yearly}
                        </p>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.features.map((f) => (
                          <span
                            key={f}
                            className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-700 border border-emerald-500/20 dark:text-emerald-200"
                          >
                            <Check className="h-3 w-3" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 dark:border-neutral-800 dark:bg-neutral-900/70">
              <p className="font-semibold text-foreground dark:text-white mb-3">Complementos (opcionales)</p>
              <div className="space-y-2">
                {ADDONS.map((a) => {
                  const checked = addons.includes(a.key);
                  return (
                    <label
                      key={a.key}
                      className={`flex items-start gap-3 rounded-2xl border p-4 cursor-pointer transition ${
                        checked ? 'border-primary/60 bg-primary/5' : 'border-border hover:bg-background/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleAddon(a.key)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground dark:text-white">{ADDON_LABELS[a.key]}</p>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">{a.description}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
              <p className="mt-3 text-[11px] text-neutral-500 dark:text-neutral-400">
                Podrás cambiar o quitar complementos más adelante.
              </p>
            </div>
          </div>

          {/* Right: minimal details + CTA */}
          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6 dark:border-neutral-800 dark:bg-neutral-900/70">
              <p className="font-semibold text-foreground dark:text-white mb-4">Datos mínimos</p>
              <div className="space-y-4">
                <Input
                  id="businessName"
                  label="Nombre del negocio"
                  placeholder="Ej: Barbería Central"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  autoComplete="organization"
                />
                <Input
                  id="email"
                  label="Email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 dark:border-neutral-800 dark:bg-neutral-900/70">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Vas a activar:{' '}
                <span className="font-semibold text-foreground dark:text-white">{PLAN_LABELS[plan.key]}</span> (
                {billingPeriod === 'monthly' ? plan.priceLabel.monthly : plan.priceLabel.yearly})
              </p>

              {error ? <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p> : null}

              <div className="mt-5">
                <Button
                  as="button"
                  type="button"
                  onClick={onCheckout}
                  disabled={loading}
                  className="w-full justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Redirigiendo a Stripe…
                    </>
                  ) : (
                    <>Ir a Stripe y pagar</>
                  )}
                </Button>
              </div>

              <p className="mt-3 text-[11px] text-neutral-500 dark:text-neutral-400">
                Stripe te pedirá método de pago y datos de facturación. No guardamos tu tarjeta.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

