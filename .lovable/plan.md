
# Plan: Implementación GDPR Completa con Excelente Usabilidad

## Resumen Ejecutivo

Implementaremos un sistema GDPR completo que protege a tus usuarios europeos mientras mantiene una experiencia de usuario fluida y no invasiva. El diseño seguirá la estética premium de "Historias de la Mente" (negro con acentos dorados).

---

## Componentes a Crear

### 1. Cookie Consent Banner (Prioridad Alta)

Un banner elegante y no invasivo que aparece en la parte inferior de la pantalla.

**Diseño UX:**
- Aparece suavemente desde abajo al cargar la página
- NO bloquea la navegación (el usuario puede seguir viendo el contenido)
- Tres opciones claras con botones bien diferenciados
- Se recuerda la preferencia del usuario (no vuelve a aparecer)

**Opciones para el usuario:**
| Botón | Acción |
|-------|--------|
| "Aceptar todas" | Activa todos los píxeles (Meta, TikTok, Google Analytics) |
| "Solo esenciales" | Solo cookies necesarias, NO carga píxeles de tracking |
| "Personalizar" | Abre modal con opciones granulares por categoría |

**Visual del banner:**
```text
┌─────────────────────────────────────────────────────────────────────┐
│  🍪 Usamos cookies para mejorar tu experiencia                      │
│                                                                     │
│  Este sitio utiliza cookies propias y de terceros para             │
│  análisis y publicidad personalizada.                              │
│                                                                     │
│  [Personalizar]  [Solo esenciales]  [✓ Aceptar todas]              │
│                                                                     │
│  Ver nuestra Política de Cookies                                   │
└─────────────────────────────────────────────────────────────────────┘
```

**Modal de personalización:**
```text
┌─────────────────────────────────────────────────────────────────────┐
│                    Configurar Cookies                       [X]    │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  ✓ Cookies Esenciales (siempre activas)                            │
│    Necesarias para el funcionamiento del sitio                     │
│                                                                     │
│  ○ Cookies de Análisis                                             │
│    Google Analytics - Para entender cómo usas el sitio             │
│                                                                     │
│  ○ Cookies de Marketing                                            │
│    Meta Pixel, TikTok Pixel - Para mostrarte anuncios relevantes   │
│                                                                     │
│                           [Guardar preferencias]                   │
└─────────────────────────────────────────────────────────────────────┘
```

---

### 2. Mejoras al Formulario de Registro (ClaseMeet)

**Checkboxes de consentimiento con diseño limpio:**

```text
┌──────────────────────────────────────────────────────────┐
│  [Campo: Tu nombre completo]                              │
│                                                          │
│  [Campo: Tu correo electrónico]                          │
│                                                          │
│  ☐ He leído y acepto la Política de Privacidad          │
│    y los Términos y Condiciones *                        │
│                                                          │
│  ☐ Quiero recibir contenido exclusivo, promociones      │
│    y consejos por email (opcional)                       │
│                                                          │
│  [ SÍ, QUIERO MI LUGAR GRATIS ]                          │
│                                                          │
│  🔒 Tus datos están protegidos. Solo los usaremos       │
│  para enviarte el acceso a la clase gratuita.           │
└──────────────────────────────────────────────────────────┘
```

**UX del formulario:**
- El checkbox de privacidad es OBLIGATORIO (marcado con asterisco)
- El checkbox de marketing es OPCIONAL (texto claro)
- Error visual si intentan enviar sin aceptar privacidad
- Los links a políticas abren en nueva pestaña
- Ícono de candado para transmitir seguridad

---

## Arquitectura Técnica

### Archivos a Crear

| Archivo | Propósito |
|---------|-----------|
| `src/components/CookieConsentBanner.tsx` | Banner principal de cookies |
| `src/components/CookiePreferencesModal.tsx` | Modal de configuración granular |
| `src/hooks/useCookieConsent.ts` | Hook para gestionar estado y localStorage |
| `src/utils/cookieConsent.ts` | Utilidades para cargar/bloquear scripts |

### Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/pages/ClaseMeet.tsx` | Agregar checkboxes GDPR al formulario |
| `src/pages/Privacy.tsx` | Actualizar con información GDPR completa |
| `src/App.tsx` | Integrar CookieConsentBanner global |
| `index.html` | Modificar scripts para carga condicional |
| `supabase/functions/submit-clase-meet/index.ts` | Guardar preferencias de consentimiento |

---

## Flujo de Consentimiento de Cookies

```text
Usuario visita el sitio
        │
        ▼
¿Tiene preferencias guardadas en localStorage?
        │
    ┌───┴───┐
    │       │
   Sí      No
    │       │
    ▼       ▼
Cargar     Mostrar
scripts    Banner
según      ─────┐
preferencias    │
                ▼
        Usuario elige opción
                │
        ┌───────┼───────┐
        │       │       │
        ▼       ▼       ▼
    Aceptar  Esencial  Personalizar
    todas              │
        │       │      ▼
        │       │   Modal con
        │       │   opciones
        │       │      │
        ▼       ▼      ▼
    Guardar en localStorage
    Cargar scripts según preferencia
    Ocultar banner
```

---

## Implementación de Scripts Condicionales

**Problema actual:** Los píxeles se cargan automáticamente en `index.html`.

**Solución:** Mover la carga de scripts a JavaScript condicional:

1. Eliminar scripts de tracking del `<head>` de `index.html`
2. Crear funciones que inyecten los scripts dinámicamente
3. Solo cargar cuando el usuario da consentimiento

```typescript
// Ejemplo de carga condicional
export const loadMetaPixel = () => {
  if (window.fbq) return; // Ya cargado
  
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s){...}
    fbq('init', '1248183170496583');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
};
```

---

## Datos que se Guardarán

**En localStorage (navegador del usuario):**
```json
{
  "cookieConsent": {
    "essential": true,
    "analytics": true,
    "marketing": false,
    "timestamp": "2026-02-01T12:00:00Z",
    "version": "1.0"
  }
}
```

**En el webhook de n8n (al registrarse):**
```json
{
  "nombre": "María García",
  "email": "maria@ejemplo.com",
  "acceptPrivacy": true,
  "acceptMarketing": false,
  "privacyVersion": "2026-02-01",
  "consentTimestamp": "2026-02-01T12:00:00Z"
}
```

---

## Actualización de Política de Privacidad

La página `/privacy` se actualizará con secciones GDPR obligatorias:

1. **Identidad del responsable** - Historias de la Mente
2. **Datos que recopilamos** - Nombre, email, datos técnicos
3. **Base legal del tratamiento** - Consentimiento explícito
4. **Finalidades** - Acceso a clase, comunicaciones (si acepta)
5. **Período de retención** - Tiempo que guardamos los datos
6. **Derechos del usuario** - Acceso, rectificación, supresión, portabilidad
7. **Cómo ejercer derechos** - Email de contacto
8. **Cookies y tecnologías** - Link a política de cookies
9. **Transferencias internacionales** - Servicios de terceros
10. **Derecho a reclamar** - Ante autoridad de control

---

## Orden de Implementación

| Paso | Tarea | Prioridad |
|------|-------|-----------|
| 1 | Crear hook `useCookieConsent.ts` | Alta |
| 2 | Crear utilidades `cookieConsent.ts` | Alta |
| 3 | Crear `CookieConsentBanner.tsx` | Alta |
| 4 | Crear `CookiePreferencesModal.tsx` | Alta |
| 5 | Modificar `index.html` - eliminar scripts auto-carga | Alta |
| 6 | Integrar banner en `App.tsx` | Alta |
| 7 | Agregar checkboxes GDPR a `ClaseMeet.tsx` | Alta |
| 8 | Actualizar edge function con datos de consentimiento | Media |
| 9 | Actualizar `Privacy.tsx` con contenido GDPR | Media |

---

## Consideraciones de Usabilidad

**Lo que haremos bien:**
- Banner NO bloquea el contenido (sticky en la parte inferior)
- Animación suave al aparecer/desaparecer
- Botones grandes y fáciles de tocar en móvil
- Texto claro y sin jerga legal complicada
- Colores consistentes con la marca (negro + dorado)
- El banner desaparece después de elegir (no molesta)
- Las preferencias se recuerdan (no pregunta cada vez)

**En el formulario:**
- Error visual amigable si faltan campos
- Texto de ayuda debajo del checkbox obligatorio
- Links a políticas que abren en nueva pestaña
- Confirmación visual de éxito al enviar

---

## Resultado Final

Tu sitio quedará:
- 100% compatible con GDPR para usuarios europeos
- Con tracking funcional solo cuando el usuario lo permite
- Con formularios que documentan el consentimiento
- Con políticas legales actualizadas y completas
- Con una experiencia de usuario elegante y no invasiva
