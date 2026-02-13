

# Plan: Imagenes Brutales para APEGO DETOX

## Resumen

Voy a regenerar las 4 imagenes desde cero con mi propio criterio creativo, pensando en lo que realmente impacta emocionalmente y se adapta a cada seccion de la landing page de lanzamiento. Nada de prompts genericos -- cada imagen tendra un concepto visual unico que golpee.

---

## Las 4 Imagenes (Concepto Nuevo)

### 1. Hero -- `apego-detox-3am-hero.jpg`
**Concepto**: Mujer colombiana de espaldas sentada en el piso de un pasillo oscuro, abrazando sus rodillas, con la unica luz viniendo de la pantalla de un celular tirado en el suelo frente a ella. Cabello largo cayendo sobre los brazos. Atmosfera de soledad absoluta, como una escena de pelicula. Cinematografico, intimo, desolador.

### 2. Seccion Revelacion -- `apego-detox-ventana.jpg`
**Concepto**: Primer plano del rostro de una mujer colombiana hermosa con los ojos cerrados, una lagrima cayendo por la mejilla, iluminada por luz natural lateral suave. Fondo completamente negro. Piel real con textura, sin filtros. Como un retrato de revista pero crudo y vulnerable. El tipo de foto que te detiene cuando la ves.

### 3. Testimonios -- `apego-detox-grupo.jpg`
**Concepto**: Dos mujeres colombianas abrazandose, una consolando a la otra, en una habitacion con luz calida dorada. Se ve la emocion genuina -- una tiene los ojos cerrados con alivio, la otra la sostiene con fuerza. Hermandad real, sanacion entre mujeres. Calido, intimo, poderoso.

### 4. Cierre -- `apego-detox-libertad.jpg`
**Concepto**: Mujer colombiana de pie en un campo abierto al amanecer dorado, vista desde atras con los brazos ligeramente abiertos, cabello al viento, vestido liviano. No es una pose de modelo -- es el momento justo despues de soltar algo enorme. Esperanza, fuerza silenciosa, libertad.

---

## Ejecucion Tecnica

- Modelo: **google/gemini-3-pro-image-preview** (Nano Banana Pro) para maxima calidad
- Las 4 imagenes se generan y reemplazan los archivos existentes en `src/assets/`
- No se modifica la estructura de la pagina, solo se reemplazan las imagenes
- Se mantienen los overlays y opacidades actuales que ya funcionan bien en el codigo

## Archivos Modificados
- `src/assets/apego-detox-3am-hero.jpg` (regenerado)
- `src/assets/apego-detox-ventana.jpg` (regenerado)
- `src/assets/apego-detox-grupo.jpg` (regenerado)
- `src/assets/apego-detox-libertad.jpg` (regenerado)

No se toca el codigo de la pagina -- solo las imagenes cambian.

