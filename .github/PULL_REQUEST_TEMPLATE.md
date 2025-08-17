# Pull Request

<!-- Thanks for your contribution! Please provide a concise summary below. -->

## What Changed  
Briefly describe what this PR changes and why.

---

## Scope  
Tick all that apply:  
- [ ] Extension code (TypeScript / UI)  
- [ ] Commands (`src/*.tsx`)  
- [ ] Gradient helpers / outputs (`src/lib/grad.ts`, `src/types.ts`)  
- [ ] Manifest / config (`package.json`, `tsconfig.json`, lint/format)  
- [ ] Assets (`assets/`)  
- [ ] Documentation (README, ROADMAP, templates)  

---

## Details  
List each file touched and the reason.  
Example:  
- `src/create-gradient.tsx` – improved colour validation and error toasts  
- `src/lib/grad.ts` – fixed Tailwind output for conic gradients  
- `package.json` – updated commands metadata  

---

## Screenshots (if UI changes)  
Add before/after images if relevant.  

---

## Manual Test Checklist
- [ ] Create → Preview → Save → Saved Gradients → Open Preview → Delete flow works  
- [ ] Copy actions produce expected CSS / SwiftUI / Tailwind snippets  
- [ ] Random Gradient shows 2–3 stops and renders correctly  
- [ ] Saved items persist and delete correctly  

---

## Checks  
- [ ] I ran `npm run lint` locally and fixed warnings  
- [ ] I ran `npm run typecheck` locally and fixed errors  
- [ ] I verified `npm run dev` opens in Raycast without errors  
- [ ] I did not introduce external network calls (local-only extension)  
