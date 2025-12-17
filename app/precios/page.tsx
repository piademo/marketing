import type { Metadata } from 'next';
import CTA from '@/components/sections/CTA';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Precios del Software BookFast | Planes para Barberías y Estética',
  description:
    'Consulta los precios de BookFast. Planes flexibles para barberías y centros de estética con agenda online y automatización.',
};

export default function PreciosPage() {
  return (
    <>
      <PricingContent />
      <CTA />
    </>
  );
}
