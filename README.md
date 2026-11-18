# Portafolio — Adolfo Venega

Sitio personal en Astro (estático) desplegado en Cloudflare Pages, con Functions para cabeceras de seguridad y `GET /api/profile`.

Dominio previsto: [https://adolfo-venega.is-a.dev](https://adolfo-venega.is-a.dev)

## Desarrollo

Requiere Node.js 22+.

```bash
npm install
npm run dev
```

Vista previa con Pages Functions:

```bash
npm run build
npx wrangler pages dev dist
```

## Deploy

```bash
npm run deploy
```

Eso ejecuta `astro build` y `wrangler pages deploy` hacia el proyecto `adolfo-venega` en la cuenta personal de Cloudflare.

- Producción: [https://adolfo-venega.pages.dev](https://adolfo-venega.pages.dev)
- Dominio previsto: [https://adolfo-venega.is-a.dev](https://adolfo-venega.is-a.dev)

## Dominio is-a.dev

1. El sitio ya está desplegado en Pages.
2. PR de registro: [is-a-dev/register#61811](https://github.com/is-a-dev/register/pull/61811) (`domain/adolfo-venega.json`).
3. Tras el merge, adjuntar el custom domain con [cf-pages.is-a.dev](https://cf-pages.is-a.dev) (Pages no permite añadir `*.is-a.dev` desde el dashboard por la Public Suffix List).

## Contenido

Los datos del perfil viven en [`src/data/profile.ts`](src/data/profile.ts) y alimentan tanto la página como la API.
