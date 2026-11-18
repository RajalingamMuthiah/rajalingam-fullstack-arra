# Project image credits

All project images are served locally from `public/` (no hot-linking).
Paths and alt text are set in `src/data/portfolio.js` (`image`, `imageAlt`).

## Screenshots of the owner's own live demos

Captured with Playwright at 1280×720, deviceScaleFactor 1, on 2026-11-18, then
converted to WebP.

| File | Source |
|---|---|
| `askimo.webp` | https://askimo-demo.vercel.app (upload screen) |
| `animal-care.webp` | https://animalrescue-emergency-response-pla.vercel.app |
| `hand-tracking.webp` | https://luxe-time-e-commerce.vercel.app/ |

## Existing site assets

| File | Source |
|---|---|
| `smart-todo.webp` | WebP copy of `public/Smart-To-Do.png` (app screenshot already in the repo). The live demo opens on a login screen, so it was not re-captured. |

## Generated covers

Projects without a real screenshot use a generated SVG cover:
`medquery`, `codey`, `barometers`, `adlc`, `cvif`, `ayusangam`,
`fraud-detection`, `eems` → `<id>-cover.svg`.

They are produced by `node scripts/generate-covers.mjs` from the project titles
and tags in `src/data/portfolio.js` and icons from
[lucide-react](https://lucide.dev) (ISC licence). No photos or third-party
artwork are used. Re-run the script after changing a project's title or tags.

## Removed

- `public/Exam.jpg` (EEMS) — source and licence unknown; replaced by
  `eems-cover.svg`.
- `public/Ayusangam.jpg` — unused, unrelated image of unknown source.
