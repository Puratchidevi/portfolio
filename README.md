# Puratchidevi R — Frontend Developer Portfolio

A premium, cinematic, dark-themed personal portfolio built with **React + Vite + Framer Motion**.

## 1. Install dependencies

```bash
npm install
```

## 2. Run the dev server

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## 4. Replace your profile photo

Drop your photo in as:

```
src/assets/images/profile.jpg
```

Keep it roughly portrait / square (min ~600×700px) for the best fit in the hero's floating image frame. If the file is missing or fails to load, a clean "PD" placeholder is shown automatically, so the app never breaks.

## 5. Replace project images

Replace these files with real screenshots (same filenames, any real image content):

```
src/assets/images/drivex.png
src/assets/images/taskboard.png
src/assets/images/beautykart.png
src/assets/images/guess-number.png
src/assets/images/ikigai-wireframe.png
```

## 6. Contact & social links

`Navbar.jsx`, `Contact.jsx`, and `Footer.jsx` are already wired with your real GitHub, LinkedIn, email, and resume link (sourced from your existing portfolio at puratchidevi.github.io/Portfolio-). Update them there if any of these ever change.

Each Frontend Project's `github` / `demo` URLs in `Projects.jsx` are still placeholders — point them at your real repos and live deploys when ready.

## 7. Wire up the contact form

The form in `src/components/Contact.jsx` currently just shows a "Message Sent" confirmation locally. To actually deliver messages, connect it to a service like **EmailJS**, **Formspree**, or your own backend inside the `handleSubmit` function.

## Project structure

```
src/
├── assets/images/        → profile + project + Ikigai wireframe images
├── components/           → one component + matching .css per section
├── App.jsx                → composes all sections, tracks active nav section
├── main.jsx                → React root
├── index.css               → design tokens (colors, type, spacing) + global resets
└── App.css
```

Sections, in order: Hero → About → Professional Experience (Concept Writer, Gaming Industry) → Skills → Frontend Projects → Ikigai (Currently Building) → Contact → Footer.

## Design notes

- **Palette:** void black (`#08080c`) / charcoal surfaces, electric violet → cyan gradient accent, glassmorphism panels.
- **Type:** Space Grotesk (display) + Inter (body) + JetBrains Mono (labels/eyebrows).
- **Motion:** Framer Motion throughout — staggered hero reveal, scroll-triggered reveals, animated timeline fill, 3D tilt project cards, magnetic contact button, floating technology logos with subtle mouse parallax.
- **Cursor:** normal browser pointer everywhere — no custom cursor.
- **Positioning:** Hero clearly states "Frontend Developer — Entry-Level / Fresher." The 2+ years shown throughout the site refers only to the previous Concept Writer / Gaming Industry role, kept in a separate "Professional Experience" section from the "Frontend Projects" section.
- Respects `prefers-reduced-motion`.
