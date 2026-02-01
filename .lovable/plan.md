
# Plan: Generar Nueva Imagen Hiperrealista con Nano Banana

## Imagen Actual
- **Archivo:** `src/assets/mujer-historias-hero.png`
- **Uso:** Hero circular en `/clase-gratuita`
- **Tamaño visual:** 140-180px circular con borde dorado

## Nueva Imagen Propuesta

### Características
| Aspecto | Detalle |
|---------|---------|
| **Estilo** | Fotografía hiperrealista, calidad cinematográfica |
| **Sujeto** | Mujer hermosa ~30 años, piel mediterránea, cabello oscuro |
| **Expresión** | Contemplativa, vulnerable pero fuerte - representa la sanación |
| **Iluminación** | Golden hour, luz cálida dorada en el rostro |
| **Fondo** | Oscuro/negro para combinar con la estética del sitio |
| **Composición** | Centrada en rostro, ideal para recorte circular |

### Prompt para Nano Banana
```text
Hyperrealistic cinematic portrait of a beautiful 30-year-old Mediterranean woman 
with dark wavy hair, emotional and contemplative expression, looking slightly to 
the side with a hint of hope in her eyes, soft golden warm lighting illuminating 
her face, dark moody black background, professional photography quality, 8k 
resolution, centered face composition perfect for circular crop, emotional 
healing theme
```

### Modelo a Usar
- **google/gemini-3-pro-image-preview** - Mayor calidad para resultado premium

## Implementación Técnica

### Paso 1: Generar Imagen
Crear Edge Function temporal o usar directamente el modelo para generar la imagen con el prompt optimizado.

### Paso 2: Guardar en Assets
Guardar la imagen generada como `mujer-hero-hiperrealista.png` en `src/assets/`.

### Paso 3: Actualizar ClaseMeet.tsx
```typescript
// Cambiar línea 4
import heroImage from "@/assets/mujer-hero-hiperrealista.png";
```

### Paso 4: Ajustar Object Position (si necesario)
```typescript
// Línea 111 - ajustar si la composición lo requiere
className="w-full h-full object-cover object-center"
```

## Optimización de Peso
- La imagen generada será en formato PNG optimizado
- Tamaño estimado: 50-150KB (vs imágenes no optimizadas de 500KB+)
- Resolución adecuada para el uso circular (no más de 512x512 necesario)

## Resultado Esperado
Una imagen que:
- Se integra perfectamente con la paleta negro + dorado
- Transmite la emoción del tema (apego, sanación, esperanza)
- Es más ligera que la actual
- Tiene calidad hiperrealista profesional
- Funciona perfectamente en formato circular
