/**
 * Generates on-brand SVG covers for projects without a real screenshot.
 *
 *   node scripts/generate-covers.mjs
 *
 * Writes public/projects/<id>-cover.svg (1280×720, 16:9). Titles and tech tags
 * come from src/data/portfolio.js; icons are lucide-react icons rendered to SVG.
 * No external images, so there is nothing to license.
 */
import { writeFileSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as Icons from "lucide-react";
import { projects } from "../src/data/portfolio.js";

// project id → three lucide icons
const COVERS = {
  medquery: ["MessagesSquare", "FileSearch", "ShieldCheck"],
  codey: ["Code2", "Container", "ShieldCheck"],
  barometers: ["Boxes", "Mic", "Database"],
  adlc: ["Workflow", "Bot", "ClipboardCheck"],
  cvif: ["Eye", "PenLine", "ScanLine"],
  ayusangam: ["HeartPulse", "Watch", "Activity"],
  "fraud-detection": ["ShieldAlert", "LineChart", "Brain"],
  eems: ["CalendarDays", "Users", "ClipboardList"],
};

// Category → glow colours (brand cyan / accent purple; never Pathwise teal).
const GLOWS = {
  ai: ["#00d9ff", "#a855f7"],
  cv: ["#a855f7", "#00d9ff"],
  fullstack: ["#0891b2", "#7c3aed"],
};
const CATEGORY_LABEL = { ai: "AI / ML", cv: "Computer Vision", fullstack: "Full-Stack" };

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const wrap = (text, max) => {
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    if (line && (line + " " + word).length > max) {
      lines.push(line);
      line = word;
    } else line = line ? `${line} ${word}` : word;
  }
  if (line) lines.push(line);
  return lines;
};

const icon = (name, x, y, size) => {
  const Icon = Icons[name];
  if (!Icon) throw new Error(`Unknown lucide icon: ${name}`);
  const svg = renderToStaticMarkup(
    createElement(Icon, { size, color: "#ffffff", strokeWidth: 1.75 }),
  );
  return svg.replace("<svg ", `<svg x="${x}" y="${y}" `);
};

const cover = (project, iconNames) => {
  const [name, ...rest] = project.title.split(" – ");
  const subtitle = rest.join(" – ") || project.subtitle || "";
  const category = project.categories.find((c) => c !== "fullstack") ?? project.categories[0];
  const [c1, c2] = GLOWS[category] ?? GLOWS.ai;

  const titleLines = wrap(name, 20);
  const titleSize = titleLines.length > 1 ? 64 : name.length > 12 ? 76 : 92;
  const titleY0 = 300 - (titleLines.length - 1) * titleSize * 0.55;
  const title = titleLines
    .map(
      (l, i) =>
        `<text x="96" y="${titleY0 + i * titleSize * 1.1}" font-size="${titleSize}" font-weight="700" fill="#ffffff" font-family="Poppins, 'Segoe UI', Arial, sans-serif">${esc(l)}</text>`,
    )
    .join("");
  const subY = titleY0 + (titleLines.length - 1) * titleSize * 1.1 + 64;
  const sub = subtitle
    ? wrap(subtitle, 52)
        .slice(0, 2)
        .map(
          (l, i) =>
            `<text x="96" y="${subY + i * 40}" font-size="30" fill="#cbd5e1" font-family="Inter, 'Segoe UI', Arial, sans-serif">${esc(l)}</text>`,
        )
        .join("")
    : "";

  // tech tags (first three from the data), as pills
  let tx = 96;
  const tags = (project.tags ?? []).slice(0, 3).map((t) => {
    const w = 28 + t.length * 13.5;
    const pill = `<rect x="${tx}" y="572" width="${w}" height="48" rx="24" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.22"/><text x="${tx + w / 2}" y="603" text-anchor="middle" font-size="22" font-weight="600" fill="#e2e8f0" font-family="Inter, 'Segoe UI', Arial, sans-serif">${esc(t)}</text>`;
    tx += w + 14;
    return pill;
  });

  const icons = iconNames
    .map((n, i) => {
      const x = 1040;
      const y = 136 + i * 160;
      return `<rect x="${x}" y="${y}" width="128" height="128" rx="28" fill="url(#tile)" stroke="#ffffff" stroke-opacity="0.18"/>${icon(n, x + 32, y + 32, 64)}`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720" role="img" aria-label="${esc(project.title)} cover">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b1020"/><stop offset="1" stop-color="#111827"/></linearGradient>
  <radialGradient id="g1" cx="0.12" cy="0.1" r="0.7"><stop offset="0" stop-color="${c1}" stop-opacity="0.45"/><stop offset="1" stop-color="${c1}" stop-opacity="0"/></radialGradient>
  <radialGradient id="g2" cx="0.95" cy="0.95" r="0.75"><stop offset="0" stop-color="${c2}" stop-opacity="0.4"/><stop offset="1" stop-color="${c2}" stop-opacity="0"/></radialGradient>
  <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0891b2"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
  <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1"/></pattern>
</defs>
<rect width="1280" height="720" fill="url(#bg)"/>
<rect width="1280" height="720" fill="url(#grid)"/>
<rect width="1280" height="720" fill="url(#g1)"/>
<rect width="1280" height="720" fill="url(#g2)"/>
<text x="96" y="132" font-size="24" font-weight="600" letter-spacing="5" fill="#67e8f9" font-family="Inter, 'Segoe UI', Arial, sans-serif">${esc(CATEGORY_LABEL[category].toUpperCase())}</text>
${title}
${sub}
${tags.join("")}
${icons}
</svg>
`;
};

for (const [id, iconNames] of Object.entries(COVERS)) {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`No project with id ${id}`);
  const out = `public/projects/${id}-cover.svg`;
  writeFileSync(out, cover(project, iconNames));
  console.log("wrote", out);
}
