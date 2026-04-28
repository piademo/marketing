import type { NextConfig } from 'next';

const securityHeaders = [
    // Fuerza HTTPS durante 2 años e incluye subdomains
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
    },
    // Evita MIME-type sniffing
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    // Impide que la página se cargue en un iframe (clickjacking)
    {
        key: 'X-Frame-Options',
        value: 'DENY',
    },
    // Controla cuánta info de referrer se envía al navegar
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
    },
    // Deshabilita APIs del navegador que no usa la app
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
    },
    // CSP: ajustada para Next.js 15 + Vercel Analytics + next/font (self-hosted)
    {
        key: 'Content-Security-Policy',
        value: [
            "default-src 'self'",
            // Next.js requiere unsafe-inline para hidratación; unsafe-eval solo en dev
            "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
            // Tailwind inyecta estilos inline
            "style-src 'self' 'unsafe-inline'",
            // next/font auto-hostea Inter en /_next/static
            "font-src 'self'",
            // Imágenes de cualquier HTTPS (igual que remotePatterns) + data URIs
            "img-src 'self' data: blob: https:",
            // Vercel Analytics + API propia
            "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
            "media-src 'self'",
            "object-src 'none'",
            "frame-src 'none'",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "upgrade-insecure-requests",
        ].join('; '),
    },
];

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    async headers() {
        return [
            {
                // Aplica a todas las rutas
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
