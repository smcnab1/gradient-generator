# Gradient Generator · Roadmap

This document tracks planned updates and ideas for future versions of **Gradient Generator**.  
Timelines are indicative and may shift based on feedback and usage.

---

## 1.2.0 — Presets & CSS Import
- 🎨 Gradient preset packs (Sunset / Ocean / Pastel / Material)
- 📥 Import from CSS: parse `linear-gradient(...)`, `radial-gradient(...)`, `conic-gradient(...)`
- 🔎 Preset browser with preview chips + “Apply” / “Duplicate”
- 🎨 Recent colours palette surfaced in the form
- ⚙️ Stop-position editing for imported strings (respect `%` if present)

---

## 1.3.0 — Better Colour Control
- 🌈 Interpolation options: sRGB (default), HSL/HSV, OKLCH
- ↔️ Stop handles: drag to reorder + numeric `%` input
- 🪟 Per-stop alpha support (CSS + SwiftUI export)
- 📋 Copy snippets: SwiftUI `Gradient` with locations

---

## 1.4.0 — Animation & Assets
- 🎞️ Animated gradient export: CSS keyframes + GIF/MP4
- 🌀 Position controls for radial/conic gradients (`at x% y%`)
- 🖼️ Wallpaper presets: 1080p / 1440p / 4K batch export

---

## 1.5.0 — Share & Sync
- 🔗 Shareable link format (serialised JSON → base64)
- 📂 Import/export library JSON (backup/restore)
- ☁️ Remember last export directories; optional iCloud/Drive folder picker
- ⭐ (Stretch) Raycast favourites sync if API support emerges

---

## 1.6.0 — Power-User Features
- 🎯 macOS system colour picker / eyedropper integration
- ♿ Accessibility contrast checker (WCAG hints)
- ⌨️ Quick actions: ⌘C CSS / ⌘⇧C SwiftUI / ⌘E export
- 📑 Duplicate current gradient as preset

---

## Backlog / Ideas
- 🖌️ Mesh gradients (SVG nodes) for organic backgrounds
- ✍️ Gradient borders & text CSS templates
- 🖼️ Image → palette → auto-gradient suggestion
- 🔗 Figma import/export helpers
- ⚡ Raycast command arguments: launch with preset via quicklink

---

## ✅ Released

### v1.1.0 — Image Export & Tailwind Mode
- 🖼️ PNG export: copy or save at preset/custom sizes (1×/2× DPR, transparency)  
- 📐 SVG export: scalable vector markup for design workflows  
- ⚡ Tailwind export toggle: arbitrary class vs raw CSS  
- ✏️ Inline rename of saved gradients (`⌘R`)  
- 🎲 Random generator options: explicitly 2- or 3-stop gradients  
- ⌨️ Form ergonomics: improved tab order, conditional angle field, reset action  
- 🛡️ Validation hardening: prevent crashes from invalid stops or colour input  

---

### v1.0.0 — Initial Public Release
- ✨ Interactive gradient builder (linear + radial)  
- 🎨 Custom stops: add, remove, adjust colours & positions  
- 📋 Export-ready output: one-click copy CSS snippets  
- ⚡ Raycast-first UX with keyboard-driven adjustments  

---

## Contributing
This extension is primarily maintained via the [Raycast Store feedback function](https://github.com/raycast/extensions/issues/new?title=%5BGradient+Generator%5D+...&template=extension_feature_request.yml&labels=extension%2Cfeature%2Brequest&extension-url=https%3A%2F%2Fwww.raycast.com%2Fsmcnab1%2Fgradient-generator&body=%0A%3C%21--%0APlease+update+the+title+above+to+consisely+describe+the+issue%0A--%3E%0A%0A%23%23%23+Extension%0A%0A%23%7Brepository_url%28extension.latest_version%29%7D%0A%0A%23%23%23+Description%0A%0A%3C%21--%0ADescribe+the+feature+and+the+current+behavior%2Fstate.%0A--%3E%0A%0A%23%23%23+Who+will+benefit+from+this+feature%3F%0A%0A%23%23%23+Anything+else%3F%0A%0A%3C%21--%0ALinks%3F+References%3F+Anything+that+will+give+us+more+context%21%0ATip%3A+You+can+attach+images+or+log+files+by+clicking+this+area+to+highlight+it+and+then+dragging+files+in.%0A--%3E%0A%0A).  
Feature requests and bug reports should be submitted there.

If you’d like to contribute code or ideas directly, please open an issue or PR on GitHub.

---
