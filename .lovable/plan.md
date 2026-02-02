

# Plan: Botón CTA Inmediatamente Debajo del Video

## Resumen

Moveremos el botón CTA dentro de la sección del video, para que cuando aparezca a los 15 minutos, esté **inmediatamente debajo** del video, no en una sección separada más abajo.

---

## Cambio Principal

### Antes (estructura actual)

```text
┌─────────────────────────────────────┐
│         SECCIÓN VIDEO               │
│    ┌───────────────────────────┐    │
│    │        VIDEO               │    │
│    └───────────────────────────┘    │
│    "Mira la clase completa..."      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐  ← Sección separada
│         SECCIÓN CTA                 │
│    AHORA SÍ: ESTE ES EL PUNTO...    │
│    [BOTÓN AMARILLO]                 │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         BENEFICIOS                  │
└─────────────────────────────────────┘
```

### Después (nueva estructura)

```text
┌─────────────────────────────────────┐
│         SECCIÓN VIDEO               │
│    ┌───────────────────────────┐    │
│    │        VIDEO               │    │
│    └───────────────────────────┘    │
│                                     │
│    ✨ "Texto motivacional rotativo" │  ← Nuevo: frases que cambian
│                                     │
│    ┌─────────────────────────────┐  │
│    │  [BOTÓN AMARILLO SOFT-GLOW] │  │  ← Aparece aquí a los 15 min
│    └─────────────────────────────┘  │
│                                     │
│    "Acceso inmediato • Paso a paso" │
│                                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         BENEFICIOS                  │
└─────────────────────────────────────┘
```

---

## Cambios en el Código

### 1. Eliminar la sección CTA separada (líneas 208-248)

La sección `<section>` que contiene el bloque CTA se eliminará como contenedor independiente.

### 2. Integrar el botón en la sección del video

El contenido del CTA se moverá **dentro** de la sección del video (líneas 184-206), justo después del texto "Mira la clase completa..."

### 3. Nueva estructura de la sección del video

```tsx
<section className="pt-6 pb-8 md:pt-10 md:pb-12 px-4">
  <div className="max-w-4xl mx-auto">
    
    {/* Video Container */}
    <div className="relative w-full aspect-video...">
      <iframe ... />
    </div>

    {/* Textos motivacionales rotativos */}
    <div className="text-center mt-6 min-h-[60px]">
      <p className={`transition-opacity duration-500 ...`}>
        {/* Frase que cambia cada 4 segundos */}
      </p>
    </div>

    {/* Bloque CTA - aparece a los 15 minutos */}
    <div className={`mt-6 text-center transition-all duration-700 ${
      showCTA 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"
    }`}>
      
      {/* Botón amarillo con soft-glow */}
      <a className="inline-block px-8 py-5 bg-[#FFD200] ... animate-soft-glow">
        COMIENZA AQUÍ: LIBÉRATE DEL APEGO
      </a>
      
      {/* Microcopy */}
      <p className="text-gray-400 mt-4">
        Acceso inmediato • Paso a paso • Enfoque práctico
      </p>
    </div>

    {/* Texto de espera (solo visible antes de los 15 min) */}
    <p className={`text-center text-gray-400 mt-6 transition-opacity ${
      showCTA ? "opacity-0 h-0" : "opacity-100"
    }`}>
      Mira la clase completa. A los 15 minutos se abre el acceso.
    </p>
    
  </div>
</section>
```

---

## Animación Soft-Glow (actualizada)

El botón usará una animación más suave y elegante:

```css
@keyframes soft-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 210, 0, 0.25), 
                0 0 40px rgba(255, 210, 0, 0.15);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 210, 0, 0.4), 
                0 0 60px rgba(255, 210, 0, 0.25);
    transform: scale(1.02);
  }
}

.animate-soft-glow {
  animation: soft-glow 2.5s ease-in-out infinite;
}
```

---

## Textos Motivacionales Rotativos

Se añadirá un componente que muestra frases que cambian cada 4 segundos con fade:

| # | Frase |
|---|-------|
| 1 | "Esta es **TU señal** para liberarte" |
| 2 | "Mereces una vida **sin ansiedad** constante" |
| 3 | "El cambio empieza con **una decisión**" |
| 4 | "Miles de mujeres ya **rompieron el ciclo**" |
| 5 | "Hoy puede ser el día en que **todo cambia**" |

Estas frases se muestran **siempre** (antes y después de los 15 minutos) para mantener el engagement mientras ve el video.

---

## Flujo Visual

| Tiempo | Lo que ve el usuario |
|--------|---------------------|
| 0-14:59 min | Video + Frases rotativas + "A los 15 min se abre el acceso" |
| 15:00+ min | Video + Frases rotativas + **BOTÓN AMARILLO** + Microcopy |

---

## Archivos a Modificar

Solo se modifica un archivo:

**`src/pages/ClaseApegoDetox.tsx`**

1. Añadir estado para frases rotativas (`currentPhrase`, `isVisible`)
2. Añadir `useEffect` para rotación cada 4 segundos
3. Mover el bloque CTA dentro de la sección del video
4. Eliminar la sección CTA separada
5. Actualizar la animación CSS a `soft-glow`
6. El título "AHORA SÍ: ESTE ES EL PUNTO..." se elimina (el botón es directo)

---

## Resultado Final

- **Botón aparece inmediatamente debajo del video** (no hay scroll necesario)
- **Frases motivacionales** mantienen engagement mientras ve el video
- **Animación soft-glow** más elegante y menos agresiva
- **Layout más limpio** sin sección separada
- **Barra sticky inferior** se mantiene igual

