# SvelteKit Client Template

A production-ready SvelteKit starter with:

- **SvelteKit 2** + **Svelte 5** (runes)
- **Tailwind CSS v4** (Vite plugin, no `tailwind.config.js` needed)
- **TypeScript** (strict mode)
- **mdsvex** — use `.svx` / `.md` files as Svelte components
- **adapter-static** — outputs a fully static site
- **Outfit Variable** font via Fontsource
- **ESLint** (flat config) + **Prettier** + **Vitest** (browser + unit)

---

## Starting a new client project

### Option A — degit (clean, no git history)
```bash
npx degit your-github-username/sveltekit-template client-name
cd client-name
npm install
```

### Option B — clone + re-init
```bash
git clone git@github-performant:performant-pro/sveltekit-template.git client-name
cd client-name
rm -rf .git && git init
npm install
```

Then update `"name"` in `package.json` to match the client.

---

## Development

```bash
npm run dev        # start dev server
npm run build      # static build → /build
npm run preview    # preview the build locally
npm run check      # TypeScript + Svelte type check
npm run lint       # Prettier + ESLint
npm run format     # auto-format everything
npm run test       # run all tests once
```

---

## Per-project customisation checklist

- [ ] Update `"name"` in `package.json`
- [ ] Update `<title>` and `<meta name="description">` in `+page.svelte`
- [ ] Replace brand colors in `src/app.css` (`:root` block)
- [ ] Swap `favicon.png` in `/static`
- [ ] Set `PUBLIC_SITE_URL` in `.env`
- [ ] Update `svelte.config.js` adapter options if SSR is needed

---

## Project structure

```
src/
  app.css           ← global styles + Tailwind import + design tokens
  app.html          ← HTML shell
  lib/
    index.ts        ← shared component/util exports
  routes/
    +layout.svelte  ← root layout (imports app.css)
    +page.svelte    ← homepage placeholder
static/
  favicon.png
```
