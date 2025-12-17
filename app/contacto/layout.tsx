import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Empieza con BookFast | Software para Barberías y Estética',
    description:
        'Contacta con BookFast y empieza a gestionar tu barbería o centro de estética con agenda online y activación guiada.',
};

export default function ContactoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
