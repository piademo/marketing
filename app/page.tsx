import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import CTA from '@/components/sections/CTA';
import ComingSoon from '@/components/sections/ComingSoon';

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: HomeProps) {
  const preview = searchParams.preview === 'true';

  if (!preview) {
    return <ComingSoon />;
  }

  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}
