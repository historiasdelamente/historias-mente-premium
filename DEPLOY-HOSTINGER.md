# Despliegue manual en Hostinger (Vite/React)

Este proyecto es una SPA con Vite/React. No usa Composer ni PHP.

## 1) Generar el build local (opción A) 

En tu PC, dentro del repositorio:

```bash
npm ci
npm run build
```

- Verifica que `dist/` contenga `index.html`, `assets/` y `.htaccess`.
- Si `dist/.htaccess` no aparece, copia `public/.htaccess` a `dist/.htaccess`.
- Crea un ZIP del contenido INTERNO de `dist/` (no comprimas la carpeta `dist` como tal). El ZIP debe contener directamente `index.html`, `assets/`, `.htaccess` en la raíz del ZIP.

## 2) Generar dist.zip desde GitHub Actions (opción B)

También puedes usar el workflow `/.github/workflows/build-dist-artifact.yml`:

1. En la pestaña **Actions** del repositorio, corre "Build Dist Artifact".
2. Al finalizar, descarga el artifact **dist-zip** (contiene `dist.zip`).

## 3) Subir a Hostinger

- En Hostinger → Administrador de Archivos, entra en la carpeta pública:
  - `public_html/` (dominio principal) o
  - `domains/tu-dominio.com/public_html/` (dominio adicional).
- Sube el ZIP y extráelo ahí. Tras extraer, deben quedar `index.html` y `assets/` directamente dentro de esa carpeta.

## 4) SPA y rutas

- El archivo `.htaccess` en `public/` ya tiene fallback para SPA y se copia a `dist/`.
- Si publicas en una **subcarpeta** (p. ej. `public_html/app/`), cambia `RewriteBase` en `.htaccess`:
  - De: `RewriteBase /`
  - A: `RewriteBase /app/`

## 5) Solución de problemas

- 404 al recargar una ruta: confirma que `.htaccess` esté presente en el servidor y que `RewriteBase` sea la correcta.
- Activos rotos en subcarpeta: podemos fijar `base` en `vite.config.ts` para esa subcarpeta y volver a compilar.

## Nota sobre "Implementar" de Hostinger

El módulo nativo de implementación de Hostinger busca `composer.json` y está orientado a PHP. Para Vite/React, usa los pasos anteriores (build local/Actions + subir `dist/`).
