# ── Stage 1: build ───────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# install deps first (layer cached unless lock file changes)
COPY package*.json ./
RUN npm ci --ignore-scripts

# copy source and build
COPY index.html     ./
COPY vite.config.js ./
COPY src/           ./src/
COPY public/        ./public/
RUN npm run build

# ── Stage 2: serve ───────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/portfolio.conf
COPY --from=builder /app/dist /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html \
 && chmod -R 755 /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1/health || exit 1
