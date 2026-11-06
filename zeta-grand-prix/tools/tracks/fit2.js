const { metrics, sample } = require('./lib.js'); const L = require('./layouts.js');
for (const k in L) { const m = metrics(L[k]), T = m.T; let ki = 0; for (let i = 0; i < T.N; i++) if (Math.abs(T.K[i]) > Math.abs(T.K[ki])) ki = i;
  const sc = Math.max(1, m.rho / 0.955); console.log(k.padEnd(10), 'len', m.L, 'rho', m.rho, 'island x', sc.toFixed(3), 'minR', m.minR, 'at', [T.X[ki] | 0, T.Z[ki] | 0], 'sep', m.sep, m.sepAt); }
