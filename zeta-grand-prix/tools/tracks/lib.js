const TAU = Math.PI * 2;
const ISLE = { cx: 0, cz: 0, AX: 330, AZ: 232 };
function slabRadius(a) { return 1 + 0.07 * Math.sin(3 * a + 1.3) + 0.05 * Math.sin(5 * a + 0.4) + 0.035 * Math.sin(9 * a + 2.2) + 0.025 * Math.sin(14 * a + 0.8); }
const isleRho = (x, z) => { const f = slabRadius(Math.atan2(z, x)); return Math.hypot(x / (ISLE.AX * f), z / (ISLE.AZ * f)); };
function crPoint(p0, p1, p2, p3, t) { const tj = (ti, a, b) => ti + Math.pow(Math.hypot(b[0] - a[0], b[1] - a[1]), 0.5), t0 = 0, t1 = tj(t0, p0, p1), t2 = tj(t1, p1, p2), t3 = tj(t2, p2, p3), tt = t1 + (t2 - t1) * t;
  const lp = (a, b, ta, tb) => [((tb - tt) * a[0] + (tt - ta) * b[0]) / (tb - ta), ((tb - tt) * a[1] + (tt - ta) * b[1]) / (tb - ta)];
  const A1 = lp(p0, p1, t0, t1), A2 = lp(p1, p2, t1, t2), A3 = lp(p2, p3, t2, t3), B1 = lp(A1, A2, t0, t2), B2 = lp(A2, A3, t1, t3); return lp(B1, B2, t1, t2); }
function sample(PTS) { const raw = [], n0 = PTS.length; for (let i = 0; i < n0; i++) for (let k = 0; k < 40; k++) raw.push(crPoint(PTS[(i - 1 + n0) % n0], PTS[i], PTS[(i + 1) % n0], PTS[(i + 2) % n0], k / 40));
  let L = 0; const cum = [0]; for (let i = 1; i <= raw.length; i++) { const a = raw[i - 1], b = raw[i % raw.length]; L += Math.hypot(b[0] - a[0], b[1] - a[1]); cum.push(L); }
  const N = Math.round(L), ds = L / N, X = [], Z = []; let j = 0; for (let i = 0; i < N; i++) { const s = i * ds; while (cum[j + 1] < s) j++; const a = raw[j % raw.length], b = raw[(j + 1) % raw.length], u = (s - cum[j]) / (cum[j + 1] - cum[j] || 1); X.push(a[0] + (b[0] - a[0]) * u); Z.push(a[1] + (b[1] - a[1]) * u); }
  const TX = [], TZ = [], K = []; for (let i = 0; i < N; i++) { const a = (i - 1 + N) % N, b = (i + 1) % N, dx = X[b] - X[a], dz = Z[b] - Z[a], l = Math.hypot(dx, dz); TX.push(dx / l); TZ.push(dz / l); }
  for (let i = 0; i < N; i++) { const a = (i - 3 + N) % N, b = (i + 3) % N; K.push((TX[a] * TZ[b] - TZ[a] * TX[b]) / (6 * ds)); }
  const sm = K.map((_, i) => { let a = 0; for (let k = -6; k <= 6; k++) a += K[(i + k + N) % N]; return a / 13; });
  return { N, L, X, Z, TX, TZ, K: sm }; }
function metrics(PTS) { const T = sample(PTS), N = T.N; let rho = 0, kmax = 0, sep = 1e9, sepAt = null, cx = 1e9, cxAt = null;
  for (let i = 0; i < N; i++) { for (const o of [-34, 34]) rho = Math.max(rho, isleRho(T.X[i] - T.TZ[i] * o, T.Z[i] + T.TX[i] * o)); kmax = Math.max(kmax, Math.abs(T.K[i]));
    const x = T.X[i], z = T.Z[i]; const onStraight = z > 92 && z < 108 && x > -178 && x < 160; if (!onStraight && x > -140 && x < 150 && z > 38 && z < 220) { const d = Math.min(Math.abs(z - 38), 1e9); if (d < cx) { cx = d; cxAt = [x | 0, z | 0]; } } }
  for (let i = 0; i < N; i += 2) for (let j = i + 2; j < N; j += 2) { let di = Math.abs(i - j); di = Math.min(di, N - di); if (di < 130) continue; const d = Math.hypot(T.X[i] - T.X[j], T.Z[i] - T.Z[j]); if (d < sep) { sep = d; sepAt = [T.X[i] | 0, T.Z[i] | 0]; } }
  return { L: Math.round(T.L), rho: +rho.toFixed(3), kmax: +kmax.toFixed(4), minR: Math.round(1 / kmax), sep: Math.round(sep), sepAt, complexHit: cxAt, T }; }
module.exports = { metrics, sample, isleRho, slabRadius, ISLE };
