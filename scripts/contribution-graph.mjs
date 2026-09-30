// Renders the last 31 days of contributions as an animated SVG line chart.
// Usage: GITHUB_TOKEN=... node scripts/contribution-graph.mjs <user> <out.svg>
// For local testing, set MOCK_FILE to a JSON file of [{date, count}] instead of GITHUB_TOKEN.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const DAYS = 31;
const [user = "rafiadli719", out = "dist/contribution-graph.svg"] = process.argv.slice(2);

async function fetchDays() {
  if (process.env.MOCK_FILE) return JSON.parse(readFileSync(process.env.MOCK_FILE, "utf8"));

  const to = new Date();
  const from = new Date(to.getTime() - (DAYS - 1) * 86400000);
  from.setUTCHours(0, 0, 0, 0);
  const query = `query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      name
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar { weeks { contributionDays { date contributionCount } } }
      }
    }
  }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { login: user, from: from.toISOString(), to: to.toISOString() } }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) throw new Error(`GitHub API error: ${JSON.stringify(json.errors ?? json)}`);

  const days = json.data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((w) => w.contributionDays)
    .map((d) => ({ date: d.date, count: d.contributionCount }));
  return { name: json.data.user.name, days: days.slice(-DAYS) };
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;");

// Catmull-Rom spline through the points, converted to cubic Bezier segments.
// Control points are clamped to `floor` so the curve never dips below zero.
function smoothPath(pts, floor) {
  const clamp = ([cx, cy]) => [cx, Math.min(cy, floor)];
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1 = clamp([p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]);
    const c2 = clamp([p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]);
    d += ` C${c1.map((v) => v.toFixed(1))} ${c2.map((v) => v.toFixed(1))} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

function niceStep(max) {
  for (const s of [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000]) if (max / s <= 12) return s;
  return Math.ceil(max / 12);
}

function render({ name, days }) {
  const W = 1200, H = 420;
  const pad = { l: 84, r: 36, t: 76, b: 76 };
  const cw = W - pad.l - pad.r, ch = H - pad.t - pad.b;
  const peak = Math.max(...days.map((d) => d.count), 0);
  const step = niceStep(Math.max(peak, 5));
  const top = Math.max(step * Math.ceil(peak / step), step * 5);

  const x = (i) => pad.l + (cw * i) / (days.length - 1);
  const y = (v) => pad.t + ch - (ch * v) / top;
  const pts = days.map((d, i) => [x(i), y(d.count)]);
  const line = smoothPath(pts, y(0));
  const total = days.reduce((s, d) => s + d.count, 0);

  const grid = [];
  for (let v = 0; v <= top; v += step) {
    grid.push(`<line x1="${pad.l}" x2="${W - pad.r}" y1="${y(v)}" y2="${y(v)}" class="grid"/>`);
    grid.push(`<text x="${pad.l - 12}" y="${y(v) + 4}" text-anchor="end" class="tick">${v}</text>`);
  }
  days.forEach((d, i) => {
    grid.push(`<line x1="${x(i)}" x2="${x(i)}" y1="${pad.t}" y2="${pad.t + ch}" class="grid"/>`);
    grid.push(`<text x="${x(i)}" y="${pad.t + ch + 22}" text-anchor="middle" class="tick">${Number(d.date.slice(8))}</text>`);
  });

  const points = pts
    .map(([px, py], i) => {
      const delay = (0.3 + (1.6 * i) / pts.length).toFixed(2);
      const title = `${days[i].date}: ${days[i].count} contribution${days[i].count === 1 ? "" : "s"}`;
      return `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="5" class="pt" style="animation-delay:${delay}s"><title>${title}</title></circle>`;
    })
    .join("");

  const who = esc(name || user);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${who}'s contribution graph: ${total} contributions in the last ${days.length} days">
  <style>
    .title { font: 600 22px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; fill: #58a6ff; }
    .tick { font: 12px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; fill: #58a6ff; }
    .axis { font: 13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; fill: #58a6ff; }
    .grid { stroke: #1f2a37; stroke-width: 1; stroke-dasharray: 3 4; }
    .line { fill: none; stroke: #1f6feb; stroke-width: 3.5; stroke-linecap: round; stroke-dasharray: 4000; stroke-dashoffset: 4000; animation: draw 2.2s ease-out forwards; }
    .area { fill: url(#fade); opacity: 0; animation: fade 1s ease-out 1.4s forwards; }
    .pt { fill: #58a6ff; stroke: #0d1117; stroke-width: 2; opacity: 0; transform-box: fill-box; transform-origin: center; animation: pop 0.4s ease-out forwards; }
    @keyframes draw { to { stroke-dashoffset: 0; } }
    @keyframes fade { to { opacity: 1; } }
    @keyframes pop { 0% { opacity: 0; transform: scale(0); } 70% { opacity: 1; transform: scale(1.4); } 100% { opacity: 1; transform: scale(1); } }
  </style>
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f6feb" stop-opacity="0.28"/><stop offset="1" stop-color="#1f6feb" stop-opacity="0"/></linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="8" fill="#0d1117" stroke="#30363d"/>
  <text x="${W / 2}" y="42" text-anchor="middle" class="title">${who}'s Contribution Graph</text>
  ${grid.join("\n  ")}
  <path class="area" d="${line} L${pts.at(-1)[0].toFixed(1)},${pad.t + ch} L${pts[0][0]},${pad.t + ch} Z"/>
  <path class="line" d="${line}"/>
  ${points}
  <text transform="translate(26 ${pad.t + ch / 2}) rotate(-90)" text-anchor="middle" class="axis">Contributions</text>
  <text x="${pad.l + cw / 2}" y="${H - 18}" text-anchor="middle" class="axis">Days</text>
</svg>
`;
}

const data = await fetchDays();
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, render(Array.isArray(data) ? { name: null, days: data } : data));
console.log(`wrote ${out}`);
