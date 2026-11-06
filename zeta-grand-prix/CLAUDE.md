# Zeta Grand Prix — notes for Claude Code

A single-file 3D Formula 1 game (`index.html`, ~2,900 lines, three.js r128 from cdnjs). No build step. Open the file in a browser, or serve the folder (`npx serve .`).

## Ground rules
- Keep it one self-contained `index.html`: inline CSS and JS, and only three.js loaded from `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`.
- Brand: Zeta 2024 guidelines. The UI is neutral graphite. Zeta purple `#6132CD` is used only on the logo tab and the hairline under the header. Fonts are Inter (titles, labels, controls), Barlow Semi Condensed (numbers) and Barlow (body text). The official wordmark is the `ZPATHS` vector paths, also in `assets/zeta-wordmark.svg`. The logo may only be white on purple/dark, or purple on white.
- The HUD must never overlap. It is a CSS grid (`.hud`: tower top-left, drive/zoom/map top-right, lower-third plus car card along the bottom), and `fitHud()` switches to `.narrow` / `.tiny` layouts. After any HUD change, run `npm run test:hud`.
- Teams are invented. Drivers are the real names in `DRIVERS`, with Aswin Biji as the default player in Zeta Tachyon.

## Code map (search for these markers in index.html)
| Area | Where |
|---|---|
| Palette + brand colours (`PAL`, extra keys `zp*`, `sd*`, `aq*`, `gl*`) | `// ===== 01 palette` |
| Render pipeline. Realistic and Raw 3D = sky pass + antialiased direct render (Raw at full device resolution). Pixel art = low-res target, outlines, OKLab palette snap | `// ===== 02 render pipeline`, `renderFrame`, `POST_FRAG` (`uSnap`, `uSkyOnly`) |
| Default settings: Realistic, Raw 3D on, 1 px, Dither on, Outlines off, Sound on, Lift near stands off. Switching the look leaves the Outlines and Dither boxes as the viewer set them | `const VIEW`, `const UI`, the checkboxes in the settings panel (synced from these at start-up in `initUI`) |
| Day / dusk / night lighting | `const LIGHTS` |
| Circuits (control points, island scale, preferred venue spots, default light) | `const CIRCUITS`, `CIRCUIT_ORDER` |
| Scenery themes (ground, strata, trees, water colours) | `const THEMES` |
| Automatic placement of venues, floodlights and stands, clear of the track | `buildDGrid`, `placeVenues`, `buildStands` |
| Island slab, rock spires, vines, islets, cloud sea | `buildSlab` (`SPIRES`, `ROCK`; sea cells sink to a seabed and get the water's cut face, `seaFace`), `buildUnder`, `buildIslets`, `buildClouds`, `buildWaterfall` |
| Crowds: instanced upper-body fans packed into the stands and standing banks, the wave, flags and phones, LOD by zoom | `const CROWD`, `buildCrowd`, `drawCrowd`, `FAN_GLSL` |
| Celebrations: confetti, smoke, flares, camera flashes, cannons, cheers on race events | `const CEL`, `buildCel`, `stepCel`, `cheer`, `fx` (particle systems `paper`, `smoke`, `spray`, `glow`) |
| Water: lakes and ponds with irregular shorelines (one outline drives the shader, the ground paint and every placement test) | `WAT_FS`, `waterBody`, `mkWob`, `lakeAt`, `inLake`, `wobPath` |
| The sea on seaside themes (`SEA_THEMES`): a stretch of rim clear of the track becomes open water to the cut edge, with beach, surf and a marina behind breakwaters. Inland circuits have no harbour | `const SEA`, `planSea` (called from `placeVenues`), `paintSea`, `buildSea`, `SEA_FS`, `inSea` |
| Local scenery per circuit: Dubai desert with camels, oasis and mirages, the fountain jets; supertrees; koi garden with drum bridge; UK pond, campsite and sheep; Monaco beach lagoon | `const FEAT`, `desert`, `dubaiFountain` / `stepFountain`, `supertrees`, `koiGarden`, `countryside`, `beach`, `stepFeatures` |
| Landmarks per theme | `buildLandmarks` (sail hotel, casino, sky-park hotel, castle, pagoda, mountain, skylines) |
| Tear down and rebuild a circuit | `clearWorld`, `buildCircuit`, `selectCircuit` |
| F1 car model and liveries | `makeCar` (`loftGeo` lofted body, `liveryMat`, `decalMat`) |
| Teams and drivers | `const TEAMS`, `const DRIVERS` |
| Race sim, AI, pits, sectors/ERS telemetry | `stepRace`, `stepAI`, `stepPlayer`, `carTelemetry`, `lapDone` |
| Traffic: lane-relative car extents, following, passing, the overlap safety net | `const CAR`, `relTo`, `laneClear`, `resolveCars` |
| The pit road's shape (it forks off the track edge as a taper; the exit mirrors it). The mesh, the grip model and the AI's line all use it | `pitEdges`, `pitMid`, `PITJ` |
| Audio, all synthesised: V6 for the watched car (eight gears, crackle, turbo), Doppler fly-bys, crowd. Starts on the first click or key press | `stepAudio`, `carRev`, `buildAudio`, `sfx` |
| Broadcast cards | `refreshTower`, `refreshSpeedo`, `buildMap` / `refreshMap`, `showLtd`, `caption` (race control), `refreshTable` |
| Auto race director + world tour | `DIR`, `stepDirector`, `setAutoRace`, `autoNext` |
| Controls / keys | `initUI` |

## Adding a circuit
1. Sketch the layout in `tools/tracks/layouts.js`. Every layout must start with the shared pit straight `[-150,100] … [120,100]`.
2. Run `npm run tracks`. Check the minimum corner radius (≥ 14 m), the separation between sections (≥ 60 m) and the island scale factor it prints. `npm run tracks:viz` draws `tools/tracks/layouts.png`.
3. Add an entry to `CIRCUITS` with `pts`, `isle` (the printed factor), `theme`, `light` and `pref` venue spots, then add its key to `CIRCUIT_ORDER`.
4. Run `npm run test:circuits` to check that every circuit builds and every venue piece finds room.

## Tests (headless Chromium + SwiftShader, so they're slow but deterministic)
- `npm install` (once). It installs three@0.128 for offline tests and Playwright.
- `npm test` runs everything.
- `npm run test:hud` checks that HUD cards never overlap or leave the stage, at 7 screen sizes.
- `npm run test:circuits` builds all 5 circuits and reports build time, venues and errors. A harbour is only expected on seaside themes.
- `npm run test:tour` runs an auto race through the podium into the next circuit.

The page exposes `window.__booted`, `APP.sim(seconds)`, `skipGrid()`, `setAutoRace()`, `selectCircuit(key)` and `buildCircuit(key)`, which the tests use for fast-forwarding.

## Known limits / ideas
- About 1,600 draw calls and 1.6–3.6 M triangles a frame (shadow pass included), measured in the TV view mid-race. The packed crowds are most of the triangles (146 per fan in close views, a low-poly fan further out; `DENSE` thins the crowd to 62% on touch devices). If phones struggle, cut the fan geometry, merge the crew meshes or cut the crew to 4 per team.
- The pixel-art look snaps to the 90-colour `PALETTE`. The extra `PAL` keys only appear in Realistic.
