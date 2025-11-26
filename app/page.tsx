import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import ForWho from '@/components/sections/ForWho';
import Pricing from '@/components/sections/Pricing';
import HowItWorks from '@/components/sections/HowItWorks';
import CTA from '@/components/sections/CTA';
import TextReveal from '@/components/ui/TextReveal';

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
