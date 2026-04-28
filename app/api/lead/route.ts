import { NextResponse } from 'next/server';

const ALLOWED_ORIGINS = (
    process.env.ALLOWED_ORIGINS ?? 'https://bookfast.es,https://www.bookfast.es'
)
    .split(',')
    .map((o) => o.trim().toLowerCase())
    .filter(Boolean);

function getAllowedOrigin(request: Request): string | null {
    const origin = request.headers.get('origin')?.toLowerCase() ?? '';
    // Same-origin requests (forms, SSR) don't send Origin header — always allow.
    if (!origin) return null;
    if (ALLOWED_ORIGINS.includes(origin)) return origin;
    return null;
}

function corsHeaders(origin: string | null) {
    const headers: Record<string, string> = {
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (origin) headers['Access-Control-Allow-Origin'] = origin;
    return headers;
}

// Preflight
export async function OPTIONS(request: Request) {
    const origin = getAllowedOrigin(request);
    if (!origin) {
        return new NextResponse(null, { status: 403 });
    }
    return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(request: Request) {
    const origin = getAllowedOrigin(request);
    const incomingOrigin = request.headers.get('origin');

    // Block cross-origin requests from unknown origins
    if (incomingOrigin && !origin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { nombre, email, telefono, negocio, mensaje } = body;

        if (!nombre || !email || !mensaje) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios' },
                { status: 400, headers: corsHeaders(origin) },
            );
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;

        if (!RESEND_API_KEY) {
            console.error('CRITICAL: RESEND_API_KEY missing in environment variables.');
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 500, headers: corsHeaders(origin) },
            );
        }

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'BookFast Contact <onboarding@resend.dev>',
                to: ['leads@bookfast.es'],
                subject: `Nuevo Lead: ${nombre} (${negocio || 'Sin negocio'})`,
                html: `
          <h1>Nuevo contacto desde Web</h1>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono || 'N/A'}</p>
          <p><strong>Negocio:</strong> ${negocio || 'N/A'}</p>
          <hr />
          <h3>Mensaje:</h3>
          <p>${mensaje}</p>
        `,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Error Resend:', errorData);
            return NextResponse.json(
                { error: 'Error enviando email' },
                { status: 500, headers: corsHeaders(origin) },
            );
        }

        return NextResponse.json({ success: true }, { headers: corsHeaders(origin) });
    } catch (error) {
        console.error('Error procesando lead:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500, headers: corsHeaders(origin) },
        );
    }
}
