// Checks that no two HUD cards overlap and none leaves the stage, at seven screen sizes.
const { devices } = require('playwright');
const { launch, openGame } = require('./harness');

const SIZES = [
  [{ viewport: { width: 1920, height: 1080 } }, 'full HD'],
  [{ viewport: { width: 1440, height: 900 } }, 'laptop'],
  [{ viewport: { width: 1280, height: 720 } }, 'HD'],
  [{ viewport: { width: 1000, height: 640 } }, 'small window'],
  [{ viewport: { width: 820, height: 1180 } }, 'tablet'],
  [{ ...devices['iPhone 13'] }, 'iPhone 13'],
  [{ ...devices['iPhone SE'] }, 'iPhone SE'],
];

const overlaps = page => page.evaluate(() => {
  const els = ['tower', 'hudCap', 'btnDrive', 'hzoom', 'map', 'ltd', 'speedo', 'nowLine'].map(id => document.getElementById(id)).filter(e => e && e.offsetParent && e.offsetHeight);
  const out = [];
  for (let i = 0; i < els.length; i++) for (let j = i + 1; j < els.length; j++) {
    const a = els[i].getBoundingClientRect(), b = els[j].getBoundingClientRect();
    if (a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1) out.push(els[i].id + ' overlaps ' + els[j].id);
  }
  const st = document.getElementById('stage').getBoundingClientRect();
  for (const e of els) { const r = e.getBoundingClientRect(); if (r.left < st.left - 1 || r.right > st.right + 1 || r.top < st.top - 1 || r.bottom > st.bottom + 1) out.push(e.id + ' leaves the stage'); }
  const cc = document.querySelector('.cc-m'); if (cc.scrollWidth > cc.clientWidth + 1) out.push('car card clipped');
  return out;
});

(async () => {
  const browser = await launch(); let failed = 0;
  for (const [opts, name] of SIZES) {
    const { ctx, page, errors } = await openGame(browser, opts);
    await page.evaluate(() => { skipGrid(); setAutoRace(true); APP.sim(25); caption('YELLOW FLAG', true); });
    await page.waitForTimeout(1500);
    await page.evaluate(() => showLtd(RACE.order[2], 'lower-third test'));
    await page.waitForTimeout(700);
    const o = await overlaps(page);
    const bad = o.length || errors.length; if (bad) failed++;
    console.log((bad ? 'FAIL ' : 'ok   ') + name.padEnd(14) + (o.length ? o.join(', ') : '') + (errors.length ? ' errors: ' + errors.join(' | ') : ''));
    await ctx.close();
  }
  await browser.close(); process.exit(failed ? 1 : 0);
})();
