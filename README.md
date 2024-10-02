# Extended Cycling Around Taiwan 2024

This project aims to write a simple blog on my cycling trip around Taiwan in June 2024.

The website is currently Work-In-Progress, and will be updated from time to time. This unfinished repository is public because I would like to serve the website on GitHub Pages, and setting up the CI-CD workflow first with some starter code allows me to understand what type of code I can and cannot write to create a static site with the modern web framework Svelte.

## Purpose

This project serves several purposes:

- Documenting my 2-week journey cycling 1100+ km around the entire island of Taiwan
- Familiarizing myself with Svelte, one of the most enjoyed modern web frameworks
- Enhancing my portfolio
- Experimenting with technologies that are new to me

## Technology Stack

- SvelteKit
- CSS
- TypeScript
- GitHub Actions CI-CD
- GitHub Pages

## Svelte Docs

Auto-generated info about the tech stack I used (aka Svelte) are shown below:

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

This is actually a statically-built site aimed to be hosted on GitHub Pages. I designed the following command:

```bash
npm run result
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
