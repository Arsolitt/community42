FROM harbor.arsolitt.tech/hub/node:22-bookworm-slim AS builder
ENV TZ=Europe/Moscow
ENV NEXT_TELEMETRY_DISABLED=1
ENV HUSKY_SKIP_INSTALL=1
ENV BUILD_MODE=ci
WORKDIR /src/app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --ignore-scripts
COPY . .
RUN yarn build

FROM harbor.arsolitt.tech/hub/node:22-bookworm-slim
ENV TZ=Europe/Moscow
ENV NEXT_TELEMETRY_DISABLED=1
ENV HUSKY_SKIP_INSTALL=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production
ENV BUILD_MODE=production
USER node
EXPOSE ${PORT}
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --ignore-scripts --production=true
COPY --chown=node --from=builder /src/app/public ./public
COPY --chown=node --from=builder /src/app/.next .next
CMD ["yarn", "start"]
