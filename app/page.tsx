import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import ForWho from '@/components/sections/ForWho';
import Pricing from '@/components/sections/Pricing';
import HowItWorks from '@/components/sections/HowItWorks';
import CTA from '@/components/sections/CTA';
import TextReveal from '@/components/ui/TextReveal';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software para Barberías y Centros de Estética | BookFast',
  description: 'BookFast es el software de gestión de citas y clientes para barberías y centros de estética. Agenda online, automatización y menos no-shows.',
};

export default function Home() {
  return (
    <>
      <TextReveal>
        <Hero />
      </TextReveal>
      <TextReveal>
        <Features />
      </TextReveal>
      <TextReveal>
        <ForWho />
      </TextReveal>
      <TextReveal>
        <Pricing />
      </TextReveal>
      <TextReveal>
        <HowItWorks />
      </TextReveal>
      <TextReveal>
        <CTA />
      </TextReveal>
    </>
  );
}
