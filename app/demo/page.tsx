import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProDashboardDemo from '@/components/ui/ProDashboardDemo';
import TextReveal from '@/components/ui/TextReveal';
import DemoTracker from '@/components/demo/DemoTracker';
import DemoCTA from '@/components/demo/DemoCTA';

export const metadata: Metadata = {
    title: 'Demo Interactiva | BookFast',
    description: 'Prueba BookFast sin compromiso. Descubre cómo funciona el software de gestión para barberías líder en el mercado.',
};

export default function DemoPage() {
    return (
        <section className="pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32">
            <Container>
                <DemoTracker />
                <div className="flex flex-col items-center text-center">
                    <TextReveal>
                        <h1 className="mb-6 max-w-4xl text-balance text-display-md font-bold tracking-tight text-foreground sm:text-display-lg">
                            Así funciona <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/60 to-secondary animated-gradient gradient-text">BookFast</span>
                        </h1>
                    </TextReveal>

                    <TextReveal>
                        <p className="mb-12 max-w-2xl text-balance text-lg text-neutral-700 dark:text-neutral-300 sm:text-xl">
                            Navega por el panel de control, gestiona citas y descubre por qué más de 500 negocios confían en nosotros. Sin registros previos.
                        </p>
                    </TextReveal>

                    {/* Demo Wrapper */}
                    <div className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_32px_90px_rgba(0,0,0,0.9)] dark:border-slate-800/80 dark:bg-[#020617]/90 mb-12 relative z-10">
                        <ProDashboardDemo mode="auto" />
                    </div>

                    {/* CTA Final */}
                    <TextReveal>
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="text-2xl font-bold text-foreground dark:text-white">
                                ¿Lo tienes claro?
                            </h2>
                            <DemoCTA />
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm text-center">
                                Si ya eres cliente, accede a tu panel profesional. <br className="hidden sm:block" />
                                Para empezar con BookFast, contáctanos.
                            </p>
                        </div>
                    </TextReveal>
                </div>
            </Container>
        </section>
    );
}
