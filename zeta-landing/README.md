# Zeta — Platform-Led Banking Technology

Marketing landing page for Zeta, built from the full build prompt spec.

## Stack

- **React 18** + **TypeScript 5** + **Vite**
- **Tailwind CSS 3.4** (PostCSS + Autoprefixer)
- **lucide-react** for icons (no other UI libraries)
- **DM Sans** (body/UI) + **DM Serif Display** (editorial headings) via Google Fonts

No animation library — entrance and scroll-reveal animations are pure CSS
keyframes driven by a single `IntersectionObserver` in `App.tsx`.

## Sections

`Navbar · Hero · Approach · Proof · Platform · Tech · Insights · CTA · Footer`

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server
npm run build    # type-check (tsc -b) and build for production
npm run preview  # preview the production build
npm run lint     # run eslint
npm run typecheck # tsc --noEmit
```

## Structure

```
src/
  App.tsx              # layout + scroll-reveal IntersectionObserver
  main.tsx             # React entry
  index.css            # fonts, brand tokens, keyframes, reveal system
  components/
    Navbar.tsx
    Hero.tsx
    ApproachSection.tsx
    ProofSection.tsx
    PlatformSection.tsx
    TechSection.tsx
    InsightsSection.tsx
    CtaSection.tsx
    Footer.tsx
```

## Design tokens

Brand colors are defined as CSS variables in `src/index.css` (`:root`) and
mirrored in `tailwind.config.js`:

| Token        | Value     | Use                  |
| ------------ | --------- | -------------------- |
| `--navy`     | `#1A1625` | primary text         |
| `--navy-dark`| `#0F0B1E` | dark sections        |
| `--purple`   | `#5B2FD4` | accent / CTA         |
| `--teal`     | `#0EA47A` | Cipher accent        |
| `--gold`     | `#C49A10` | Neutrino / awards    |
| `--coral`    | `#E85D3A` | problem / highlights |
