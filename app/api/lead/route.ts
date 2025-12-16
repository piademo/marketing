import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, email, telefono, negocio, mensaje } = body;

        // 1. Validación básica
        if (!nombre || !email || !mensaje) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;

        // Si no hay API Key configurada, devolvemos error explícito para evitar falsos positivos
        if (!RESEND_API_KEY) {
            console.error('CRITICAL: RESEND_API_KEY missing in environment variables.');
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 500 }
            );
        }

        // 2. Envío con Resend (vía fetch para cero dependencias)
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'BookFast Contact <onboarding@resend.dev>', // Fallback seguro
                to: ['leads@bookfast.es'], // Email interno
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
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error procesando lead:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
