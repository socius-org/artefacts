# artefact(s): LeNet-1 — Deploy to GitHub Pages

## What this is

A single-page website for **artefact(s): LeNet-1**, an art installation by socius labs. Currently a React JSX component with images embedded as base64. Needs to become a GitHub Pages site.

## File layout I'm starting with

```
repo/
├── artefacts-lenet-v14.jsx    ← the component
└── assets/
    └── img/
        ├── neuron_closeup.[ext]
        ├── full_isometric.[ext]
        ├── side_section.[ext]
        ├── frame_wireframe.[ext]
        ├── pcb_detail.[ext]
        ├── pcb_panel.[ext]
        ├── layer_grid.[ext]
        ├── pcb_schematic.[ext]
        ├── pcb_layout.[ext]
        ├── pcb_photo.[ext]
        ├── pcb_traces.[ext]
        ├── lecun_digits.[ext]
        ├── lecun_conv.[ext]
        ├── lecun_arch.[ext]
        └── socius_banner.[ext]
```

**Image files are a mix of PNG and JPG.** Before updating the IMAGES object, check the actual file extensions in `assets/img/` and use those. Do not assume all are JPG.

## What I need you to do

### 1. Scaffold a Vite + React project

Minimal setup. The component is entirely self-contained — inline styles, no CSS files, no external JS dependencies beyond React.

### 2. Replace base64 images with file references

The JSX has an `IMAGES` object with base64 data URIs. Replace them with paths to the image files. Put images in `public/assets/img/` so Vite serves them as static files with zero processing — no compression, no resizing, no format conversion. The originals must be served as-is at full quality.

**Check the actual file extensions** in the assets folder first, then update:

```js
const IMAGES = {
  neuronCloseup: "/assets/img/neuron_closeup.[actual ext]",
  fullIsometric: "/assets/img/full_isometric.[actual ext]",
  sideSection: "/assets/img/side_section.[actual ext]",
  frameWireframe: "/assets/img/frame_wireframe.[actual ext]",
  pcbDetail: "/assets/img/pcb_detail.[actual ext]",
  pcbPanel: "/assets/img/pcb_panel.[actual ext]",
  layerGrid: "/assets/img/layer_grid.[actual ext]",
  pcbSchematic: "/assets/img/pcb_schematic.[actual ext]",
  pcbLayout: "/assets/img/pcb_layout.[actual ext]",
  pcbPhoto: "/assets/img/pcb_photo.[actual ext]",
  pcbTraces: "/assets/img/pcb_traces.[actual ext]",
  lecunDigits: "/assets/img/lecun_digits.[actual ext]",
  lecunConv: "/assets/img/lecun_conv.[actual ext]",
  lecunArch: "/assets/img/lecun_arch.[actual ext]",
  sociusBanner: "/assets/img/socius_banner.[actual ext]",
};
```

You can determine the correct extensions by running:
```bash
ls -la public/assets/img/
```

**Important:** If deploying to a subpath like `username.github.io/repo-name/`, prefix all paths with the base URL, or use Vite's `base` config so the paths resolve correctly.

### 3. Image handling — do not optimise

- Files in Vite's `public/` directory are served as-is with no processing
- Do NOT use `import` statements for images (that triggers Vite's asset pipeline which may add hashes or inline small files)
- Do NOT run any image optimisation, compression, or format conversion
- Keep every file in its original format (PNG stays PNG, JPG stays JPG)

### 4. Configure for GitHub Pages

In `vite.config.js`:
```js
export default defineConfig({
  base: '/REPO_NAME/',   // ← replace with actual repo name
  plugins: [react()],
})
```

### 5. Render the component as the full page

`App.jsx` (or equivalent) should just render the component:
```jsx
import ArtefactsLeNet from './ArtefactsLeNet'
export default function App() {
  return <ArtefactsLeNet />
}
```

No router needed. Single page.

### 6. Build and deploy

```bash
npm run build
npx gh-pages -d dist
```

Or set up GitHub Actions to build and deploy on push to main.

### 7. Verify

- All 15 images load correctly (check browser DevTools Network tab — no 404s)
- Fonts load (Playfair Display, DM Mono, Source Serif 4 — all from Google Fonts CDN via @import in the component's style tag)
- `mixBlendMode: "multiply"` renders correctly on the warm (#F8F7F4) background sections
- Images are served at original resolution (not downscaled)
- PNG files stay as PNG in the built output

## Notes

- No CSS files — everything is inline styles
- No external dependencies beyond React
- 15 images total (mix of PNG and JPG)
- Component uses `useState` and `useEffect` from React (fade-in on mount)
- The base64 versions in the JSX artifact were downscaled for embedding — the deployed site should use the full-quality originals
