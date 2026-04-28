# Guía de Puesta en Marcha

## Paso 1 — Contratar los servicios de IA

### HeyGen (Avatar AI — Obligatorio para vídeos)
- **URL:** heygen.com
- **Plan recomendado:** Creator ($29/mes) → Scale ($89/mes) cuando el volumen suba
- **Acción:** Crear avatar personalizado "Sara" o usar avatar stock femenino profesional (buscar: "Laura" o "Sofia" en su catálogo)
- **API Key:** Settings → API → Generate API Key
- **Voz:** Usar Azure TTS voz "es-ES-ElviraNeural" (incluida en HeyGen) o subir voz clonada
- **Fondos:** Subir los 4 fondos definidos en `avatar/persona.md`

### fal.ai (Generación de imágenes — Flux Dev)
- **URL:** fal.ai
- **Coste:** ~$0.025/imagen (pay-per-use, sin suscripción)
- **API Key:** fal.ai/dashboard → API Keys → New Key
- **Alternativa:** OpenAI DALL-E 3 ($0.04/imagen 1024×1024)

### Anthropic API (Claude — Cerebro del agente)
- **URL:** console.anthropic.com
- **Modelos usados:** claude-sonnet-4-6 (estrategia/scripts), claude-haiku-4-5 (tareas rápidas)
- **Coste estimado:** ~$30-50/mes para el volumen de este agente
- **API Key:** console.anthropic.com → API Keys

---

## Paso 2 — Configurar las APIs de Redes Sociales

### Meta (Instagram + Facebook)
1. Ir a developers.facebook.com → Crear App → Tipo "Business"
2. Añadir productos: "Instagram Graph API" y "Facebook Pages API"
3. Permisos necesarios: `instagram_basic`, `instagram_content_publish`, `pages_manage_posts`, `pages_read_engagement`
4. Generar Page Access Token (long-lived, 60 días → renovar con cron)
5. Obtener: `META_IG_ACCOUNT_ID` (ID numérico de la cuenta IG business)
6. Obtener: `META_FB_PAGE_ID` (ID numérico de la página de Facebook)

### Twitter / X
1. developer.twitter.com → Projects & Apps → New App
2. Permisos: Read + Write (para publicar)
3. Generar: API Key, API Secret, Access Token, Access Token Secret
4. **Nota:** Requiere cuenta verificada (Basic plan $100/mes para acceso a v2 write)

### TikTok
1. developers.tiktok.com → App Management → Create App
2. Categoría: "Content Publishing"
3. Permisos: `video.publish`, `video.upload`
4. Seguir flujo OAuth para obtener Access Token de la cuenta de marca
5. **Nota:** TikTok solo permite publicar vídeos (no imágenes estáticas)

---

## Paso 3 — Configurar n8n

### Credenciales a crear en n8n (Settings → Credentials)

| Nombre en n8n | Tipo | Datos |
|---|---|---|
| `Anthropic API` | HTTP Header Auth | Header: `x-api-key`, Value: `sk-ant-...` |
| `fal.ai API` | HTTP Header Auth | Header: `Authorization`, Value: `Key FAL_KEY` |
| `HeyGen API` | HTTP Header Auth | Header: `X-Api-Key`, Value: `HEYGEN_KEY` |
| `Meta Graph API` | HTTP Query Auth | Param: `access_token`, Value: `META_TOKEN` |
| `TikTok API` | HTTP Header Auth | Header: `Authorization`, Value: `Bearer TIKTOK_TOKEN` |
| `Twitter OAuth 1.0a` | OAuth1 | Consumer Key/Secret + Access Token/Secret |

### Variables de entorno en n8n
En Settings → Variables, crear:
```
META_IG_ACCOUNT_ID    = 123456789012345
META_FB_PAGE_ID       = 987654321098765
```

### Importar los workflows
1. n8n → Workflows → Import from file
2. Importar en orden: `01-weekly-planner.json` → `02-image-creator.json` → `03-video-creator.json` → `04-social-publisher.json`
3. En cada workflow, verificar que las credenciales están seleccionadas correctamente
4. **No activar aún** — revisar primero con ejecuciones de prueba

---

## Paso 4 — Crear Avatar Sara en HeyGen

### Opción A: Avatar personalizado (recomendado, mejor resultado)
1. HeyGen → Avatars → Create Photo Avatar
2. Subir 3-5 fotos de la persona real (o foto de stock de alta calidad con licencia)
3. Seguir el proceso de entrenamiento (~2-4 horas)
4. Nombrar el avatar: "Sara_Bookfast_v1"
5. Copiar el `avatar_id` generado y actualizarlo en `03-video-creator.json`

### Opción B: Avatar de stock HeyGen
1. HeyGen → Avatars → Browse (filtrar: mujer, profesional, europea)
2. Seleccionar una que encaje con el perfil de Sara
3. Copiar su `avatar_id` y actualizar en el workflow

### Subir fondos
1. HeyGen → Backgrounds → Upload
2. Subir los 4 archivos de fondo (crear en Figma/Canva respetando el brand)
3. Actualizar las URLs en el workflow `03-video-creator.json`

---

## Paso 5 — Prueba end-to-end

```bash
# 1. Probar el planificador manualmente (ejecutar una vez en n8n)
# Ir al workflow 01 → Execute Workflow

# 2. Probar generación de imagen
curl -X POST https://TU_N8N/webhook/bookfast/image-creator \
  -H "Content-Type: application/json" \
  -d '{
    "content_id": "test_001",
    "topic": "Recordatorios automáticos para reducir no-shows",
    "hook": "El 30% de tus citas no aparecen. Solución:",
    "key_points": ["WhatsApp automático 24h antes", "Confirmación con 1 toque", "-80% de no-shows"],
    "hashtags": ["#BookFast", "#peluqueria", "#gestiondecitas"],
    "cta": "Pruébalo gratis en bookfast.es",
    "platforms": ["instagram"],
    "type": "imagen_estatica",
    "image_prompt": "Professional barber shop interior, modern minimal, blue accent lighting, smartphone with calendar app, editorial photography"
  }'

# 3. Probar generación de vídeo
curl -X POST https://TU_N8N/webhook/bookfast/video-creator \
  -H "Content-Type: application/json" \
  -d '{
    "content_id": "test_video_001",
    "topic": "Cómo funciona la agenda online de BookFast",
    "hook": "¿Sigues apuntando citas en papel?",
    "key_points": ["Agenda online 24/7", "El cliente reserva solo", "Tú cobras mientras duermes"],
    "platform": "instagram",
    "duration": 60
  }'
```

---

## Costes Estimados Mensuales

| Servicio | Uso estimado | Coste/mes |
|---|---|---|
| HeyGen Creator | ~16 vídeos (60s) | $29-89 |
| fal.ai Flux | ~60 imágenes | ~$1.50 |
| Anthropic Claude | ~500K tokens | ~$15-25 |
| Twitter/X API Basic | Acceso write | $100 |
| **TOTAL** | | **~$150-215/mes** |

> Sin Twitter/X Basic: ~$50-115/mes. Twitter se puede añadir en fase 2.

---

## Activar el agente

Una vez probado todo:
1. Activar workflow `04-social-publisher` (siempre primero)
2. Activar workflow `02-image-creator`
3. Activar workflow `03-video-creator`
4. Activar workflow `01-weekly-planner` (último — arrancará el ciclo)

El primer lunes a las 8:00 se generará automáticamente el primer calendario semanal.
