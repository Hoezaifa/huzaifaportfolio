# Huzaifa Riaz — Portfolio

Personal portfolio website for Huzaifa Riaz, a graphic and UI/UX designer based in Karachi.

---

## What is this?

This is a website built with HTML and CSS. It has no database, no login, no backend — just a static site that gets packaged into a small container and served by a web server called nginx.

Docker handles everything: it installs the tools, builds the site, and runs it. You don't need Node.js or anything else installed on your machine — just Docker.

---

## Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

That's it.

---

## Running the site

### Normal mode (production)

This builds the site and serves it exactly as visitors would see it.

```
docker compose up --build
```

Then open **http://localhost:3000** in your browser.

To stop it, press `Ctrl + C` in the terminal, then run:

```
docker compose down
```

---

### Dev mode (hot reload)

This is for when you're editing the design and want to see changes in the browser instantly without rebuilding. Save a file → the browser updates on its own.

```
docker compose -f compose.dev.yml up --build
```

Then open **http://localhost:3000** in your browser.

To stop it, press `Ctrl + C`, then run:

```
docker compose -f compose.dev.yml down
```

---

## Folder structure

```
huzaifa-portfolio/
├── index.html              ← the entire website (one page)
├── src/
│   ├── styles/             ← all the CSS (visual design)
│   │   ├── main.css        ← entry point, imports everything below
│   │   ├── _tokens.css     ← colours, fonts, spacing rules
│   │   ├── _topbar.css     ← top navigation bar
│   │   ├── _hero.css       ← the big "Portfolio" title section
│   │   ├── _ribbon.css     ← the scrolling text banners
│   │   ├── _section.css    ← shared styles used across all sections
│   │   ├── _about.css      ← About Me section
│   │   ├── _work.css       ← all portfolio work sections
│   │   └── _contact.css    ← Contact section
│   └── scripts/
│       └── main.js         ← a small JS file for the mobile nav toggle
├── public/                 ← static files (images go here when ready)
├── nginx/
│   └── nginx.conf          ← web server config (caching, compression, security)
├── Dockerfile              ← instructions for building the production container
├── compose.yml             ← production Docker Compose config
└── compose.dev.yml         ← dev Docker Compose config (hot reload)
```

---

## Adding images

Every image placeholder across the site looks like this in `index.html`:

```html
<div class="img-slot img-slot--poster">[ Gangs of SMIU — film poster ]</div>
```

To replace one with a real image, follow these three steps:

---

**Step 1 — Drop the image into the `public/` folder**

Put your image file (JPG, PNG, WebP, etc.) directly inside the `public/` folder at the root of the project. Keep the filename simple, no spaces — use hyphens instead.

Example: `public/gangs-of-smiu-poster.jpg`

---

**Step 2 — Open `index.html` and find the matching placeholder**

Use `Ctrl + F` (or `Cmd + F` on Mac) to search for the text inside the brackets, e.g. `Gangs of SMIU`. That will jump you straight to the right line.

---

**Step 3 — Replace the `<div>` with an `<img>` tag**

Delete the entire `<div class="img-slot ...">...</div>` line and replace it with this:

```html
<img class="img-slot img-slot--poster" src="/gangs-of-smiu-poster.jpg" alt="Gangs of SMIU film poster" />
```

Keep the same `class` values that were on the `<div>` — they control the size and shape of the slot. Only swap the tag itself, the `src` path, and the `alt` description.

---

**The size classes explained**

Each placeholder has one of these classes that controls its shape. Your image will fill that exact shape:

| Class | Shape | Used for |
|---|---|---|
| `img-slot--poster` | Tall rectangle (3:4) | Posters |
| `img-slot--banner` | Wide rectangle (16:9) | Thumbnails, banners |
| `img-slot--square` | Square (1:1) | Social media tiles, apparel |
| `img-slot` (no modifier) | Flexible height | Landing screens, feed mockups |

---

**After adding images, rebuild the site**

If you're running normal mode, stop it and run:

```
docker compose up --build
```

If you're in dev mode with hot reload, the browser will update automatically the moment you save `index.html` — no rebuild needed.
