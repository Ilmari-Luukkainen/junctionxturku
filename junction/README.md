# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## SPA navigation (History API)

App uses browser History API routing without React Router.

Routes:
- `/` = Etusivu
- `/about` = About
- `/schedule` = Aikataulu

Navigation is handled with `history.pushState`, and browser back/forward works through a `popstate` listener.

## Deploy rewrites

If you deploy as a Single Page App, all routes must rewrite to `index.html`.

### Vercel

`vercel.json`:

```json
{
	"rewrites": [
		{ "source": "/(.*)", "destination": "/index.html" }
	]
}
```

### Netlify alternative

`_redirects` file:

```
/* /index.html 200
```



Lataa seuraavat:

npm install gsap
