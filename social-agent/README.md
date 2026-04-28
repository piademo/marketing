# BookFast — Agente Autónomo de Redes Sociales

Sistema de gestión autónoma de contenido para Instagram, TikTok, Facebook y Twitter/X.
Orquestado por **n8n**, generación de contenido con **IA**, publicación 100% automatizada.

---

## Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────────┐
│                         n8n Orchestrator                        │
│                                                                 │
│  ┌──────────────┐   ┌──────────────┐   ┌────────────────────┐  │
│  │  Planificador│   │  Generador   │   │  Generador Video   │  │
│  │  Semanal     │──▶│  Imágenes    │   │  AI Presenter      │  │
│  │  (Lunes 8am) │   │  (Flux/fal)  │   │  (HeyGen)          │  │
│  └──────────────┘   └──────┬───────┘   └─────────┬──────────┘  │
│         │                  │                     │              │
│         ▼                  ▼                     ▼              │
│  ┌──────────────┐   ┌──────────────────────────────────────┐   │
│  │  Calendario  │   │          Publicador Multi-Plataforma  │   │
│  │  (Base datos)│   │  Instagram · TikTok · Facebook · X    │   │
│  └──────────────┘   └──────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Stack de IA

| Función | Herramienta | API |
|---|---|---|
| Estrategia y copy | Claude Sonnet 4.x | Anthropic API |
| Imágenes de marca | Flux Dev / DALL-E 3 | fal.ai / OpenAI |
| Vídeo AI presenter | HeyGen | HeyGen API |
| Animaciones motion | RunwayML Gen-3 | RunwayML API |
| Subtítulos automáticos | AssemblyAI | AssemblyAI API |

---

## Plataformas y Cadencia

| Plataforma | Tipo de contenido | Frecuencia |
|---|---|---|
| **Instagram** | Posts, Reels (9:16), Stories | 5× / semana |
| **TikTok** | Vídeos cortos 15-60s | 4× / semana |
| **Facebook** | Posts, vídeos, carruseles | 3× / semana |
| **Twitter/X** | Texto + imagen | 7× / semana |

---

## Pilares de Contenido

1. **Educación (30%)** — Tips para dueños de salones, gestión eficiente
2. **Producto (25%)** — Demos de funcionalidades, tutoriales (AI presenter)
3. **Social Proof (20%)** — Historias de éxito, estadísticas de clientes
4. **Tendencias (15%)** — Sector belleza, peluquería, estética
5. **Comunidad (10%)** — Engagement, preguntas, retos

---

## Workflows n8n

```
workflows/
├── 01-weekly-planner.json       # Planificación semanal (lunes 8:00)
├── 02-image-creator.json        # Generación de imágenes de marca
├── 03-video-creator.json        # Vídeos con AI presenter (HeyGen)
└── 04-social-publisher.json     # Publicación multi-plataforma
```

**Importar en n8n:** Settings → Workflows → Import from file

---

## Variables de Entorno en n8n

Configurar en n8n → Settings → Credentials / Environment Variables:

```
ANTHROPIC_API_KEY=sk-ant-...
HEYGEN_API_KEY=...
FAL_API_KEY=...
RUNWAY_API_KEY=...
ASSEMBLYI_API_KEY=...

# Meta (Instagram + Facebook)
META_APP_ID=...
META_APP_SECRET=...
META_ACCESS_TOKEN=...
META_IG_ACCOUNT_ID=...
META_FB_PAGE_ID=...

# Twitter / X
TWITTER_API_KEY=...
TWITTER_API_SECRET=...
TWITTER_ACCESS_TOKEN=...
TWITTER_ACCESS_SECRET=...

# TikTok
TIKTOK_CLIENT_KEY=...
TIKTOK_CLIENT_SECRET=...
TIKTOK_ACCESS_TOKEN=...
```

---

## Avatar AI — "Sara Bookfast"

Ver `avatar/persona.md` para la definición completa del presentador IA.

- **Plataforma:** HeyGen (avatar personalizado o stock realista)
- **Idioma:** Español (España), con acento neutro profesional
- **Tono:** Cercana, profesional, entusiasta del sector belleza
- **Look:** Profesional moderna, coherente con brand azul/morado

---

## Flujo Completo

```
Lunes 8:00
    │
    ▼
[Claude] Genera calendario semanal en JSON
    │
    ├──▶ Posts de imagen → [Flux] genera → [Publisher]
    │
    ├──▶ Vídeos producto → [Claude script] → [HeyGen] → [Publisher]
    │
    └──▶ Posts texto → [Claude copy] → [Publisher]
                                            │
                                            ├──▶ Instagram (Graph API)
                                            ├──▶ TikTok (Content API)
                                            ├──▶ Facebook (Graph API)
                                            └──▶ Twitter/X (v2 API)
```
