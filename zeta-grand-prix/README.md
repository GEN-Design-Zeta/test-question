# Zeta Grand Prix

A 3D Formula 1 race game in Zeta branding. It runs across five floating-island circuits, in one HTML file with no build step.

**Play:** open `index.html` in Chrome, Edge, Safari or Firefox, or run `npx serve .` and open the link it prints.

## What's in it
- **Five circuits on a world tour:** Palm Marina (Dubai), Riviera Harbour (Monte Carlo), Bayfront Night (Singapore), Northfield Park (UK) and Sakura Hills (Japan). Each has its own layout, island and landmarks.
- **Floating islands:** deep layered rock with hanging spires and vines, a long waterfall, drifting islets and a sea of clouds.
- **Modern F1 cars:** nose, halo, sidepods, layered wings and low-profile tyres with compound bands, plus team liveries and numbers.
- **A 20-driver grid in 10 teams.** You are Aswin Biji in the Zeta Tachyon car.
- **Auto race:** the AI drives and a TV director cuts between battles, the leader, pit stops and your car. With World tour on, each race moves to the next circuit, with random weather.
- **Broadcast cards:**
  - timing tower with interval/leader, tyre compound and position changes
  - car card with shift lights, throttle and brake, sectors, live delta, tyre age and wear, ERS and DRS
  - live track map, driver lower-thirds and race-control messages
- **Drive it yourself:** arcade physics, pit stops, tyre and engine strategy, and wet weather.
- **Looks:** Realistic (antialiased, soft shadows, glossy paint) or Pixel art. Day, dusk and night.

## Controls
| Key | Action |
|---|---|
| Arrow keys / WASD | Drive (takes the wheel from autopilot) |
| Space | DRS |
| G | Autopilot on/off |
| V | Auto race on/off |
| B | Box this lap |
| M / T | Engine mode / next tyres |
| N / K / P | New race / skip grid / pause |
| 1–4 | Follow / Chase / Heli / Island camera |
| + / − | Zoom (also: mouse wheel, pinch, or the on-screen buttons) |
| Q / E | Turn the view |
| C / L | Track condition / time of day |

## Working on it
See `CLAUDE.md` for the code map, brand rules and how to add a circuit. Run `npm install`, then `npm test` for the headless checks.
