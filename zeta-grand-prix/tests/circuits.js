// Builds every circuit and reports build time, track length, corners and which venue pieces found room.
const { launch, openGame } = require('./harness');

(async () => {
  const browser = await launch(); const { ctx, page, errors } = await openGame(browser, { viewport: { width: 1280, height: 800 } }); let failed = 0;
  const keys = await page.evaluate(() => CIRCUIT_ORDER);
  for (const k of keys) {
    const r = await page.evaluate(k => { const t0 = performance.now(); buildCircuit(k); newRace(); const v = Object.keys(VEN).filter(x => x !== 'taken'); return { ms: Math.round(performance.now() - t0), km: (TRK.L / 1000).toFixed(2), corners: CORNERS.length, missing: v.filter(x => !VEN[x] && !(x === 'harbour' && !SEA_THEMES[CIR.theme])) /* inland circuits have no sea, so no harbour */, cars: CARS.length }; }, k);
    const bad = r.missing.length || r.cars !== 20; if (bad) failed++;
    console.log((bad ? 'FAIL ' : 'ok   ') + k.padEnd(11) + r.km + ' km, ' + r.corners + ' corners, built in ' + r.ms + ' ms' + (r.missing.length ? ', no room for: ' + r.missing.join(', ') : ''));
  }
  if (errors.length) { failed++; console.log('errors: ' + errors.join(' | ')); }
  await ctx.close(); await browser.close(); process.exit(failed ? 1 : 0);
})();
