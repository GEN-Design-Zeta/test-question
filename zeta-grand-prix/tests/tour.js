// Runs an auto race to the podium and checks the world tour moves on to the next circuit.
const { launch, openGame } = require('./harness');

(async () => {
  const browser = await launch(); const { ctx, page, errors } = await openGame(browser, { viewport: { width: 1280, height: 800 } });
  await page.evaluate(() => { skipGrid(); setAutoRace(true); });
  const start = await page.evaluate(() => CIR.key); let last = '', moved = false;
  for (let k = 0; k < 60 && !moved; k++) {
    const st = await page.evaluate(() => { APP.sim(12); return CIR.key + ' ' + RACE.state; });
    if (st !== last) { console.log('  ' + st); last = st; }
    if (!st.startsWith(start) && st.includes('race')) moved = true;
    await page.waitForTimeout(150);
  }
  const ok = moved && !errors.length;
  console.log((ok ? 'ok   ' : 'FAIL ') + 'auto race and world tour' + (errors.length ? ' errors: ' + errors.join(' | ') : ''));
  await ctx.close(); await browser.close(); process.exit(ok ? 0 : 1);
})();
