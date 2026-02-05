

# Plan: Rediseño de Landing Page con Sistema de Colores Actual

## Resumen

Se rediseñará la landing page principal manteniendo el **sistema de colores actual** (fondo negro puro con acentos dorados) pero implementando la **nueva estructura de contenido** orientada a conversión.

---

## Sistema de Colores (SIN CAMBIOS)

Se conserva el sistema actual:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--background` | `0 0% 0%` | Fondo negro puro |
| `--foreground` | `45 100% 85%` | Texto dorado claro |
| `--golden` | `45 100% 51%` | Acentos principales (#FFC107) |
| `--golden-light` | `45 100% 65%` | Acentos secundarios |
| `--card` | `0 0% 3%` | Fondo de tarjetas |

Se mantienen todas las utilidades CSS existentes: `.golden-text`, `.card-premium`, `.hover-lift`, `.btn-cta-primary`, etc.

---

## Nueva Estructura de la Página

### Sección 1: Hero Section (Rediseño)

**Layout**: Dos columnas en desktop, apilado en móvil

```text
┌──────────────────────────────────────────────────┐
│  ┌─────────┐   "No Te Extraña.                   │
│  │ AVATAR  │   Te Usa Cuando Le Conviene.        │
│  │ 192px   │   ¿Hasta Cuándo?" (dorado)          │
│  │ borde   │                                      │
│  │ dorado  │   "Yo trabajo con mujeres..."       │
│  └─────────┘                                      │
│                                                   │
│   [CLASE GRATUITA]  [HAZ EL TEST 3 MIN]          │
└──────────────────────────────────────────────────┘
```

**Elementos**:
- Avatar circular de Javier Vieira (192px) con borde dorado 4px
- Titular en 3 líneas con "¿Hasta Cuándo?" en `.golden-text`
- Copy persuasivo con "QUIERES" en negrita y dorado
- 2 botones CTA lado a lado (se apilan en móvil)

### Sección 2: Banner del Cuestionario

**Diseño**: Ancho completo con gradiente sutil dorado sobre negro

```text
┌──────────────────────────────────────────────────┐
│  📋 ¿No Sabes Si Estás en Apego Traumático?     │
│  Responde 12 preguntas y descubre tu nivel      │
│                                                   │
│       [HACER EL TEST AHORA (3 MIN) →]           │
└──────────────────────────────────────────────────┘
```

- Borde superior/inferior con `border-golden/30`
- Fondo con gradiente sutil `--gradient-card`

### Sección 3: Apego Detox (Prioridad Alta)

**Diseño**: Sección destacada con fondo ligeramente más claro

```text
┌──────────────────────────────────────────────────┐
│           ╔════════════════════╗                 │
│           ║   APEGO DETOX     ║  ← Badge rotado │
│           ╚════════════════════╝                 │
│                                                   │
│      "El Programa Que Rompe El Ciclo"           │
│                                                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ +2000    │ │ 8 semanas│ │ Acompaña-│        │
│  │ mujeres  │ │ paso a   │ │ miento   │        │
│  │          │ │ paso     │ │ directo  │        │
│  └──────────┘ └──────────┘ └──────────┘        │
│                                                   │
│  [VER CLASE GRATUITA]  [ENTRAR AL PROGRAMA]     │
└──────────────────────────────────────────────────┘
```

- Tarjetas con estilo `card-premium`
- Badge visual con gradiente dorado, rotado -2°

### Sección 4: Libros Publicados

**Diseño**: Grid de 2 columnas (existente pero simplificado)

```text
┌──────────────────────────────────────────────────┐
│            MIS LIBROS PUBLICADOS                 │
│                                                   │
│  ┌─────────────────┐  ┌─────────────────┐       │
│  │ Guía Narcisismo │  │ Apagón Emocional│       │
│  │    [imagen]     │  │    [imagen]     │       │
│  │  "Conocer más"  │  │  "Conocer más"  │       │
│  └─────────────────┘  └─────────────────┘       │
└──────────────────────────────────────────────────┘
```

- Menos prominencia visual que Apego Detox
- Sin banners "LIBRO" superpuestos (más limpio)

### Sección 5: Redes Sociales (Simplificada)

**Diseño**: Barra de iconos minimalista

```text
┌──────────────────────────────────────────────────┐
│                SÍGUEME EN:                       │
│                                                   │
│     [YouTube]  [Instagram]  [TikTok]  [Facebook] │
│                                                   │
└──────────────────────────────────────────────────┘
```

- Iconos monocromos (gris) → dorado al hover
- Tamaño 32px, espaciado 16px
- Links reales:
  - YouTube: `https://www.youtube.com/@Historiasdelamente2`
  - Facebook: `https://www.facebook.com/historiasdelamentevip`
  - TikTok: `https://www.tiktok.com/@historias.de.la.mente`
  - Instagram: placeholder `#`

**Elementos Eliminados**:
- Video de YouTube embebido
- Sección "Mujeres Sanadoras"
- Cards grandes con descripciones

### Sección 6: Footer (Actualizado)

```text
┌──────────────────────────────────────────────────┐
│           HISTORIAS DE LA MENTE                  │
│      Psicólogo Especialista en Narcisismo        │
│                                                   │
│     [YouTube]  [Instagram]  [TikTok]  [Facebook] │
│                                                   │
│       contacto@historiasdelamente.com            │
│            Medellín, Colombia                    │
│                                                   │
│   © 2025 - Todos los derechos reservados         │
└──────────────────────────────────────────────────┘
```

**Eliminado**: Número de licencia COLPSIC, texto "Psicólogo Clínico"

---

## Archivos a Modificar

| Archivo | Cambios |
|---------|---------|
| `src/pages/Index.tsx` | Reestructurar secciones |
| `src/components/HeroSection.tsx` | Rediseño completo con layout de 2 columnas y nuevo copy |
| `src/components/SitelinksSection.tsx` | Reemplazar por banner del cuestionario |
| `src/components/SocialMediaSection.tsx` | Simplificar a barra de iconos (sin video, sin Mujeres Sanadoras) |
| `src/components/BenefitsSection.tsx` | Convertir en sección Apego Detox destacada |
| `src/components/Footer.tsx` | Agregar iconos sociales, ubicación, sin COLPSIC |

## Nuevos Componentes

1. `src/components/landing/NewHeroSection.tsx` - Hero con avatar + copy persuasivo
2. `src/components/landing/QuestionnaireBanner.tsx` - Banner CTA del test
3. `src/components/landing/ApegoDetoxSection.tsx` - Sección destacada del programa
4. `src/components/landing/BooksGrid.tsx` - Grid simplificado de libros
5. `src/components/landing/SocialIconBar.tsx` - Barra minimalista de iconos

---

## Responsive

- **Mobile-first**: Todo apilado verticalmente
- **Tablet (md)**: Grids de 2 columnas donde aplique
- **Desktop (lg)**: Layouts completos de 2-3 columnas
- Botones 100% ancho en móvil, inline en desktop
- Texto mínimo 16px, botones altura mínima 44px

## Interacciones (Conservadas)

- Hover en botones: `scale(1.05)` + glow dorado
- Transiciones: 300ms cubic-bezier
- Sombras doradas en cards
- Animaciones `fade-in` y `scale-in` al scroll

---

## Elementos Eliminados vs Conservados

| Eliminado | Conservado |
|-----------|------------|
| Video YouTube embebido | FloatingChatWidget para test |
| Sección "Mujeres Sanadoras" | Assets de libros existentes |
| Cards grandes de redes sociales | Foto de Javier Vieira |
| Número COLPSIC | Sistema de colores negro/dorado |
| Texto "Psicólogo Clínico" | Clases CSS personalizadas |
| Sección "Javier Vieira" completa | Logo/banner del header |

