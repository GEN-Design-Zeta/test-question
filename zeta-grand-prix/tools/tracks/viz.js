const { chromium } = require('playwright'); const { sample, isleRho } = require('./lib.js'); const L = require(process.env.LF||'./layouts.js');
(async () => { const data = {}; for (const k in L) { const T = sample(L[k]); data[k] = { X: T.X, Z: T.Z, P: L[k] }; }
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1500, height: 900 } });
  await p.setContent('<canvas id=c width=1500 height=900></canvas>');
  await p.evaluate(D => { const c = document.getElementById('c'), g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, 1500, 900); let i = 0;
    const sr = a => 1 + 0.07 * Math.sin(3 * a + 1.3) + 0.05 * Math.sin(5 * a + 0.4) + 0.035 * Math.sin(9 * a + 2.2) + 0.025 * Math.sin(14 * a + 0.8);
    for (const k in D) { const ox = (i % 3) * 500 + 250, oy = Math.floor(i / 3) * 450 + 225, s = 0.68; i++;
      g.strokeStyle = '#999'; g.beginPath(); for (let a = 0; a <= 6.3; a += 0.02) { const f = sr(a), x = 330 * f * Math.cos(a), z = 232 * f * Math.sin(a); a ? g.lineTo(ox + x * s, oy + z * s) : g.moveTo(ox + x * s, oy + z * s); } g.stroke();
      g.fillStyle = 'rgba(255,0,0,.12)'; g.fillRect(ox - 140 * s, oy + 38 * s, 290 * s, 182 * s);
      g.strokeStyle = '#222'; g.lineWidth = 14 * s; g.beginPath(); D[k].X.forEach((x, j) => j ? g.lineTo(ox + x * s, oy + D[k].Z[j] * s) : g.moveTo(ox + x * s, oy + D[k].Z[j] * s)); g.closePath(); g.stroke();
      g.fillStyle = '#c00'; D[k].P.forEach((q, j) => { g.fillRect(ox + q[0] * s - 2, oy + q[1] * s - 2, 4, 4); g.font = '9px sans-serif'; g.fillText(j, ox + q[0] * s + 3, oy + q[1] * s); });
      g.fillStyle = '#000'; g.font = 'bold 16px sans-serif'; g.fillText(k, ox - 230, oy - 200); } }, data);
  await p.screenshot({ path: 'layouts.png' }); await b.close(); })();
