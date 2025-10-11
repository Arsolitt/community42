FROM harbor.arsolitt.tech/hub/node:24-bookworm-slim AS builder
ENV TZ=Europe/Moscow
ENV NEXT_TELEMETRY_DISABLED=1
ENV HUSKY_SKIP_INSTALL=1
ENV BUILD_MODE=ci
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-bookworm-slim
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Moscow
ENV NEXT_TELEMETRY_DISABLED=1
ENV HUSKY_SKIP_INSTALL=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production
ENV BUILD_MODE=production
WORKDIR /app
COPY --from=builder /src/app/.next/standalone .
COPY --chown=node:node --from=builder /src/app/public /app/public
COPY --chown=node:node --from=builder /src/app/.next/static /app/.next/static
RUN mkdir -p /app/.next/cache && \
  chown -R node:node /app && \
  chmod -R 700 /app
USER node
WORKDIR /app
CMD ["node", "./server.js"]
