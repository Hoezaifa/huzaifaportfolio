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

Image slots across the site currently show placeholder boxes. To swap in a real image, drop the file into the `public/` folder and update the corresponding `img-slot` in `index.html` with an `<img>` tag pointing to it.
