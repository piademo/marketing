import type { Metadata } from 'next';
import CTA from '@/components/sections/CTA';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Precios del Software de Reservas BookFast',
  description:
    'Descubre el precio del software de reservas BookFast. Planes claros, sin permanencia y con soporte incluido para tu negocio de belleza.',
};

export default function PreciosPage() {
  return (
    <>
      <PricingContent />
      <CTA />
    </>
  );
}
