const { metrics, isleRho } = require('./lib.js'); const L = require('./layouts.js');
for (const k in L) { const m = metrics(L[k]); console.log(k.padEnd(10), 'len', m.L, 'rho', m.rho, 'minR', m.minR, 'sep', m.sep, m.sepAt, 'complex', m.complexHit); }
