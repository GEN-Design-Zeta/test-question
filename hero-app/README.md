# Zeta — Hero Section

Premium, enterprise-grade full-screen hero for Zeta, a platform-led banking
technology company. Built with **React + Vite**, **Tailwind CSS**,
**Framer Motion**, **lucide-react**, and **hls.js**.

## Run

```bash
cd hero-app
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Architecture

```
src/
├─ App.jsx
└─ components/
   ├─ Hero.jsx            # assembles the layered hero + z-index stack
   ├─ Navigation.jsx      # fixed glassy nav (logo · 6 triggers · CTA · burger)
   ├─ BackgroundVideo.jsx # Mux HLS stream via hls.js + native fallback
   ├─ HeroMotion.jsx      # purple energy orbiting the copy (Framer Motion)
   ├─ BlurIn.jsx          # reusable blur-in entrance animation
   └─ SplitText.jsx       # word-by-word staggered headline reveal
```

## Layer / z-index stack

| Layer                    | z-index   |
| ------------------------ | --------- |
| Background video         | `z-0`     |
| Purple video overlay     | `z-[1]`   |
| Purple motion animation  | `z-10`    |
| Bottom fade gradient     | `z-10`    |
| Hero content             | `z-20`    |
| Navigation               | `z-50`    |

## Notes

- The video autoplays muted, loops, and plays inline; scaled `1.15×` and
  `object-cover`. On mobile an extra dark layer strengthens readability.
- The purple motion (rings, orbs, orbiting dots, data-line shimmer, pulsing
  glow) wraps the text and keeps the center clear via radial masks.
- Fully honours `prefers-reduced-motion` — the motion layer collapses to a
  single static glow.
- Content text, headline, and CTA copy come from the Zeta homepage source;
  the nav flow/hierarchy mirrors `index.html`.
