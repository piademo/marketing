export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // En una app real esto sería MDX o HTML
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'como-reducir-no-shows-barberia',
    title: "La guía definitiva para eliminar los 'No-Shows' en tu barbería",
    excerpt:
      'Perder un 20% de facturación por clientes que no aparecen es evitable. Descubre cómo los recordatorios automáticos pueden salvar tu negocio.',
    category: 'Gestión',
    author: 'Carlos BookFast',
    date: '24 Oct, 2023',
    readTime: '5 min',
    content: `
      <p>¿Te ha pasado? Es viernes por la tarde, tienes la agenda llena y, de repente, ese cliente de las 17:00 no aparece. Llamas, no contesta. Has perdido 30 minutos y 20€.</p>
      <h2>El coste oculto de las ausencias</h2>
      <p>Un 'no-show' no es solo dinero perdido hoy. Es un hueco que podrías haber vendido a otro cliente fiel. Si te fallan 3 clientes a la semana, estás perdiendo más de 3.000€ al año.</p>
      <h2>La solución: Automatización</h2>
      <p>La mayoría de clientes no faltan por maldad, sino por olvido. En BookFast hemos comprobado que enviar un WhatsApp automático 24h antes reduce las ausencias en un 85%.</p>
      <ul>
        <li>Configura recordatorios 24h antes.</li>
        <li>Pide confirmación de asistencia.</li>
        <li>Aplica una política de cancelación clara.</li>
      </ul>
    `,
  },
  {
    slug: 'tendencias-cortes-hombre-2025',
    title: 'Tendencias de gestión para salones en 2025',
    excerpt:
      'Ya no basta con cortar bien el pelo. La experiencia del cliente y la digitalización son las claves para competir este año.',
    category: 'Tendencias',
    author: 'Ana Estilista',
    date: '15 Nov, 2023',
    readTime: '4 min',
    content: `
      <p>El sector de la belleza está cambiando. Los clientes ya no quieren llamar por teléfono para reservar; quieren hacerlo desde Instagram un domingo a las 23:00.</p>
      <h2>Digitalización o muerte</h2>
      <p>Tener una agenda de papel es romántico, pero ineficiente. No puedes medir tus métricas, no puedes hacer marketing y pierdes mucho tiempo al teléfono.</p>
      <h2>La experiencia 360</h2>
      <p>Desde que reservan hasta que salen por la puerta, todo cuenta. Ofrece facilidades de pago, reservas online y un seguimiento post-servicio para fidelizar.</p>
    `,
  },
  {
    slug: 'subir-precios-sin-perder-clientes',
    title: '¿Miedo a subir precios? Estrategias para hacerlo bien',
    excerpt:
      'Subir precios es necesario para la salud de tu negocio. Aprende a comunicarlo sin que tus clientes se enfaden.',
    category: 'Finanzas',
    author: 'Equipo BookFast',
    date: '02 Dic, 2023',
    readTime: '6 min',
    content: `
      <p>La inflación afecta a todos: la luz, los productos, el alquiler. Si tus costes suben y tus precios no, estás perdiendo dinero cada día que abres.</p>
      <h2>Aporta valor antes de subir</h2>
      <p>Antes de cambiar la tarifa, mejora algo visible: renovar el local, ofrecer café de especialidad o implementar un sistema de reservas más cómodo como BookFast.</p>
      <h2>Comunica con antelación</h2>
      <p>Avisa a tus clientes con al menos 30 días de margen. Sé transparente y explica que es para mantener la calidad del servicio.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}
