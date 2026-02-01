
# Plan: Detección Geográfica para GDPR (Hostinger Compatible)

## Resumen

Implementaremos un sistema que detecta automáticamente si el usuario está en un país donde se requiere el banner de cookies (UE, Reino Unido, Brasil). Para usuarios de Latinoamérica y otros países, el banner NO se mostrará, y los scripts de tracking se cargarán automáticamente.

---

## Países que Requieren el Banner

| Región | Países | Regulación |
|--------|--------|------------|
| **Unión Europea** | AT, BE, BG, HR, CY, CZ, DK, EE, FI, FR, DE, GR, HU, IE, IT, LV, LT, LU, MT, NL, PL, PT, RO, SK, SI, ES, SE | GDPR |
| **Reino Unido** | GB | UK GDPR |
| **Brasil** | BR | LGPD |
| **EEE (no UE)** | IS, LI, NO | GDPR aplica |

**Latinoamérica (sin banner):** MX, AR, CO, CL, PE, VE, EC, etc.

---

## Arquitectura Técnica

### Enfoque: API de Geolocalización del lado del cliente

Como Hostinger no proporciona headers de geolocalización, usaremos una API gratuita que se llama al cargar la página:

**API elegida:** `https://ipapi.co/json/` (gratuita, 1000 req/día, sin API key)

### Flujo de Decisión

```text
Usuario visita el sitio
        │
        ▼
¿Tiene geoData en sessionStorage?
        │
    ┌───┴───┐
    Sí     No
    │       │
    ▼       ▼
  Usar   Llamar API
 cache   ipapi.co
    │       │
    └───┬───┘
        │
        ▼
¿País requiere GDPR?
(EU, GB, BR, EEA)
        │
    ┌───┴───┐
   Sí      No
    │       │
    ▼       ▼
Mostrar  Cargar todos
banner   los scripts
GDPR     automáticamente
         (sin banner)
```

---

## Archivos a Modificar

### 1. `src/utils/cookieConsent.ts`
Agregar:
- Lista de países GDPR (`GDPR_COUNTRIES`)
- Función `detectUserCountry()` que llama a la API
- Función `requiresGDPRConsent()` que verifica si el país necesita consentimiento
- Cache en `sessionStorage` para evitar llamadas repetidas

### 2. `src/hooks/useCookieConsent.ts`
Modificar la lógica de inicialización:
- Primero detectar el país del usuario
- Si NO requiere GDPR → cargar todos los scripts sin mostrar banner
- Si SÍ requiere GDPR → mostrar banner (comportamiento actual)

### 3. `src/pages/ClaseMeet.tsx`
Hacer los checkboxes de privacidad condicionales:
- Crear hook `useRequiresGDPR()` para verificar si mostrar checkboxes
- Si el usuario NO está en país GDPR → ocultar checkboxes del formulario
- Si está en país GDPR → mantener checkboxes obligatorios

---

## Detalles de Implementación

### Lista de Países GDPR (27 UE + UK + EEA + Brasil)

```typescript
const GDPR_COUNTRIES = [
  // Unión Europea (27 países)
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // Reino Unido
  'GB',
  // EEE (no UE)
  'IS', 'LI', 'NO',
  // Brasil (LGPD)
  'BR'
];
```

### Función de Detección

```typescript
export const detectUserCountry = async (): Promise<string | null> => {
  // Verificar cache primero
  const cached = sessionStorage.getItem('userCountry');
  if (cached) return cached;

  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const country = data.country_code;
    
    // Guardar en cache
    sessionStorage.setItem('userCountry', country);
    return country;
  } catch (error) {
    // En caso de error, asumir GDPR (más seguro legalmente)
    return null;
  }
};

export const requiresGDPRConsent = (countryCode: string | null): boolean => {
  if (!countryCode) return true; // Si no podemos detectar, mostrar banner
  return GDPR_COUNTRIES.includes(countryCode);
};
```

### Modificación del Hook

```typescript
// En useCookieConsent.ts
useEffect(() => {
  const initializeConsent = async () => {
    const stored = getStoredConsent();
    
    if (stored) {
      setPreferences(stored);
      loadConsentedScripts();
      return;
    }
    
    // Detectar país
    const country = await detectUserCountry();
    const needsGDPR = requiresGDPRConsent(country);
    
    if (needsGDPR) {
      // Mostrar banner para países GDPR
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Cargar todo automáticamente para LATAM
      acceptAllCookies();
      setIsGDPRRequired(false);
    }
  };
  
  initializeConsent();
}, []);
```

---

## Comportamiento por Región

| Usuario de... | Banner de Cookies | Checkboxes en Formulario | Tracking |
|---------------|-------------------|--------------------------|----------|
| México, Argentina, Colombia, etc. | ❌ No se muestra | ❌ No se muestran | ✅ Carga automático |
| España, Francia, Alemania, etc. | ✅ Se muestra | ✅ Se muestran (obligatorio) | ⏳ Solo tras consentimiento |
| Reino Unido | ✅ Se muestra | ✅ Se muestran (obligatorio) | ⏳ Solo tras consentimiento |
| Brasil | ✅ Se muestra | ✅ Se muestran (obligatorio) | ⏳ Solo tras consentimiento |

---

## Fallback de Seguridad

Si la API de geolocalización falla:
- **Asumir que requiere GDPR** (protección legal)
- Mostrar el banner como comportamiento por defecto
- Esto evita problemas legales en caso de fallo técnico

---

## Nuevas Exportaciones del Hook

El hook `useCookieConsent` expondrá:

```typescript
interface UseCookieConsentReturn {
  // Existentes...
  preferences: CookiePreferences;
  showBanner: boolean;
  // ...
  
  // Nuevo
  requiresGDPR: boolean; // Para uso en formularios
}
```

Esto permite que `ClaseMeet.tsx` sepa si debe mostrar los checkboxes:

```tsx
const { requiresGDPR } = useCookieConsent();

{requiresGDPR && (
  <div className="space-y-4 pt-2">
    {/* Checkboxes de privacidad */}
  </div>
)}
```

---

## Resultado Final

- **Para tu audiencia de LATAM**: Experiencia limpia sin banners ni checkboxes extras
- **Para usuarios de UE/UK/Brasil**: Cumplimiento total con GDPR/LGPD
- **API gratuita**: ipapi.co ofrece 1000 requests/día gratis (suficiente para empezar)
- **Cache inteligente**: Solo una llamada a la API por sesión de usuario
