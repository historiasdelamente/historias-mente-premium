

# Mejora de Imagenes Hiperrealistas - Pagina de Lanzamiento APEGO DETOX

## Objetivo

Generar imagenes hiperrealistas de alta calidad para la landing page `/clase-apego-detox-marzo` (clase gratuita "APEGO DETOX: Rompe el Lazo Invisible"). Las mujeres deben ser hermosas, instagrameables, latinas, y cada imagen debe reflejar emocionalmente el mensaje de la seccion donde aparece.

---

## Plan de Imagenes

### Imagen 1 -- Hero Background (apego-detox-3am-hero.jpg)
- **Seccion**: Hero (fondo negro con overlay 70%)
- **Fondo**: Oscuro, cinematografico
- **Prompt**: Mujer latina hermosa ~30 anos, sola al borde de la cama a las 3AM, iluminada solo por la luz azul fria de la pantalla del telefono, lagrimas en el rostro, cabello largo perfecto, piel luminosa, habitacion oscura con sabanas desordenadas, anguish profundo, cinematografico, 85mm lens, shallow depth of field, film grain, Sony A7IV, 16:9

### Imagen 2 -- Ventana con Lluvia (nueva: apego-detox-ventana.jpg)
- **Seccion**: S3 Revelacion (fondo negro) -- imagen decorativa lateral o de fondo
- **Fondo**: Oscuro, melancolico
- **Prompt**: Mujer latina hermosa ~35 anos, frente apoyada contra ventana cubierta de lluvia, ojos enrojecidos pero bella, reflejo visible, blusa blanca, luz melancolica suave, soledad, prision invisible, estilo Leica Q3, 3:2

### Imagen 3 -- Mujeres Sanando / Grupo (nueva: apego-detox-grupo.jpg)
- **Seccion**: S7 Testimonios (fondo negro)
- **Fondo**: Calido, dorado
- **Prompt**: Tres mujeres latinas diversas y hermosas (30s, 40s, 50s) en sala calida con luz dorada, tomadas de las manos en circulo, una riendo con lagrimas, otra escuchando con empatia, otra hablando con vulnerabilidad, velas, hermandad, sanacion, Sony A7III 35mm f/1.4, 3:2

### Imagen 4 -- Transformacion / Libertad (nueva: apego-detox-libertad.jpg)
- **Seccion**: S9 Cierre (fondo crema) -- imagen emocional de cierre
- **Fondo**: Claro, dorado, esperanzador
- **Prompt**: Mujer latina hermosa ~35 anos caminando hacia la camara en playa vacia al atardecer dorado, vestido blanco fluyendo con el viento, cabello al viento, sonrisa sutil de quien supero algo enorme, puesta de sol dorada sobre el oceano, Canon R5 70-200mm f/2.8, 16:9

---

## Cambios en el Codigo

### Archivo: `src/pages/ClaseApegoDetoxMarzo.tsx`

1. **Regenerar** la imagen hero existente (`apego-detox-3am-hero.jpg`) con el modelo de alta calidad Nano Banana Pro
2. **Agregar nuevas imagenes** a las secciones que actualmente solo tienen texto:
   - Seccion Revelacion (S3): imagen de ventana con lluvia como fondo sutil
   - Seccion Testimonios (S7): imagen de grupo de mujeres sanando
   - Seccion Cierre (S9): imagen de transformacion/libertad
3. **Integrar las imagenes** en el layout de cada seccion con overlay oscuro donde corresponda para mantener legibilidad del texto

### Generacion de Imagenes

Se usara una edge function con el modelo `google/gemini-3-pro-image-preview` (Nano Banana Pro) para generar las 4 imagenes con calidad maxima. Las imagenes base64 resultantes se guardaran como archivos en `src/assets/`.

### Archivos Nuevos
- `src/assets/apego-detox-ventana.jpg`
- `src/assets/apego-detox-grupo.jpg`
- `src/assets/apego-detox-libertad.jpg`

### Archivo Modificado
- `src/assets/apego-detox-3am-hero.jpg` (regenerado con mejor calidad)
- `src/pages/ClaseApegoDetoxMarzo.tsx` (nuevos imports + integracion visual)

---

## Estilo Visual

- Mujeres latinas, piel perfecta, estilo editorial/Instagram
- Fondos oscuros para secciones con fondo negro
- Fondos claros/dorados para secciones con fondo crema
- Alto contraste entre texto e imagen siempre
- Grain cinematografico, iluminacion dramatica lateral o dorada

