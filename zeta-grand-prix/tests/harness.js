// Shared test harness: opens index.html in headless Chromium with software WebGL,
// serves three.js from node_modules (so tests run offline) and collects page errors.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const THREE_JS = path.join(ROOT, 'node_modules/three/build/three.min.js');

async function launch() {
  return chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
}

async function openGame(browser, contextOptions) {
  const ctx = await browser.newContext(contextOptions);
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !m.text().includes('ERR_FAILED')) errors.push(m.text().slice(0, 300)); });
  await page.route('**/three.min.js', r => r.fulfill({ body: fs.readFileSync(THREE_JS), contentType: 'application/javascript' }));
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto('file://' + path.join(ROOT, 'index.html'));
  await page.waitForFunction(() => window.__booted, null, { timeout: 180000 });
  return { ctx, page, errors };
}

module.exports = { launch, openGame, ROOT };
