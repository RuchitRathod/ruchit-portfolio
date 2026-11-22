# Ruchit Rathod — Portfolio

Personal developer portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Framer Motion and Lucide React.

## Local development

Use Node.js 20.19+ (or 22.12+) and npm.

```sh
npm ci
npm run dev
```

## Quality checks

```sh
npm run lint
npm exec tsc -- -b --pretty false
npm run build
```

The production site is generated in `dist/`. Preview it locally with `npm run preview` after building.

## Deploy on Vercel

Import the GitHub repository into Vercel and use:

- Framework preset: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

The current site does not require environment variables.
