# BookFast Marketing Website

Web de marketing profesional para BookFast - Software de gestión de citas para peluquerías, barberías y centros de estética.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Despliegue**: Vercel

## 📁 Estructura del Proyecto

```
marketing/
├── app/                          # App Router de Next.js
│   ├── (public)/                 # Grupo de rutas públicas
│   │   ├── page.tsx              # Home
│   │   ├── precios/              # Página de precios
│   │   ├── funcionalidades/      # Funcionalidades del producto
│   │   ├── como-funciona/        # Cómo funciona BookFast
│   │   ├── sectores/             # Páginas por sector
│   │   │   ├── peluquerias/
│   │   │   ├── barberias/
│   │   │   └── centros-estetica/
│   │   ├── integraciones/        # Integraciones disponibles
│   │   ├── recursos/             # Recursos y documentación
│   │   ├── blog/                 # Blog y artículos
│   │   │   └── [slug]/           # Detalle de artículo
│   │   ├── sobre-nosotros/       # Sobre BookFast
│   │   ├── contacto/             # Formulario de contacto
│   │   └── legal/                # Páginas legales
│   │       ├── privacidad/
│   │       ├── cookies/
│   │       └── terminos/
│   ├── layout.tsx                # Layout raíz
│   └── globals.css               # Estilos globales
│
├── components/                   # Componentes React
│   ├── layout/                   # Componentes de layout
│   │   ├── Header.tsx            # Navegación principal
│   │   └── Footer.tsx            # Footer del sitio
│   ├── ui/                       # Componentes UI reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Badge.tsx
│   │   └── Container.tsx
│   └── sections/                 # Secciones de páginas
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       └── CTA.tsx
│
├── lib/                          # Utilidades y helpers
├── public/                       # Archivos estáticos
├── tailwind.config.ts            # Configuración de Tailwind
├── tsconfig.json                 # Configuración de TypeScript
└── next.config.ts                # Configuración de Next.js
```

## 🎨 Sistema de Diseño

### Colores

- **Primary**: Azul (#0ea5e9) - CTAs y elementos principales
- **Secondary**: Púrpura (#a855f7) - Acentos y gradientes
- **Neutral**: Escala de grises para texto y fondos
- **Success**: Verde para estados positivos
- **Warning**: Amarillo para alertas
- **Error**: Rojo para errores

### Tipografía

- **Font**: Inter (Google Fonts)
- **Display**: Títulos grandes con tracking ajustado
- **Body**: Texto legible y espaciado óptimo

### Componentes

Todos los componentes UI están en `components/ui/` y siguen un patrón consistente:
- Variantes (primary, secondary, outline, ghost)
- Tamaños (sm, md, lg)
- Estados (hover, focus, disabled)
- Totalmente tipados con TypeScript

## 🚦 Empezar

### Instalación

```bash
# Instalar dependencias
npm install
# o
pnpm install
# o
yarn install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:3000
```

### Build

```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm start
```

### Linting y Formato

```bash
# Ejecutar ESLint
npm run lint

# Formatear código con Prettier
npm run format

# Verificar formato
npm run format:check
```

## 📄 Páginas Principales

### Home (/)
- Hero con propuesta de valor clara
- Sección de beneficios clave
- Cómo funciona (resumen)
- Características destacadas
- Para quién es
- CTA final

### Precios (/precios)
- Tabla comparativa de planes
- Starter, Professional, Enterprise
- CTAs claros para cada plan

### Funcionalidades (/funcionalidades)
- Organizado por categorías
- Agenda, Equipo, Comunicaciones, Pagos, etc.
- Descripciones detalladas

### Sectores
- `/sectores/peluquerias`
- `/sectores/barberias`
- `/sectores/centros-estetica`

Cada página adaptada al sector específico.

### Blog (/blog)
- Listado de artículos
- Detalle de artículo con SEO optimizado

### Contacto (/contacto)
- Formulario de contacto
- Información de contacto
- CTA para solicitar demo

## 🎯 SEO y Performance

- Metadata optimizada en cada página
- Open Graph y Twitter Cards
- Imágenes optimizadas (AVIF, WebP)
- Lazy loading
- Estructura semántica HTML5
- Sitemap automático (Next.js)

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` para variables de entorno:

```env
# Añadir variables según necesidad
NEXT_PUBLIC_API_URL=
```

### Tailwind

La configuración de Tailwind está en `tailwind.config.ts` con:
- Sistema de colores personalizado
- Tipografía extendida
- Animaciones personalizadas
- Utilidades adicionales

## 📝 Convenciones de Código

- **Componentes**: PascalCase (`Button.tsx`)
- **Utilidades**: camelCase (`formatDate.ts`)
- **Constantes**: UPPER_SNAKE_CASE
- **CSS**: Clases de Tailwind, evitar CSS custom
- **TypeScript**: Tipado estricto, evitar `any`

## 🚀 Despliegue

El proyecto está configurado para desplegarse en Vercel:

1. Conecta el repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Las variables de entorno se configuran en el dashboard de Vercel
4. Cada push a `main` despliega automáticamente

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contribuir

Este es un proyecto interno de BookFast. Para contribuir:

1. Crea una rama desde `main`
2. Realiza tus cambios
3. Asegúrate de que pasa el linting
4. Crea un Pull Request

## 📧 Contacto

Para dudas sobre el proyecto: tech@bookfast.es

---

**BookFast** - Gestión de citas profesional para el sector belleza