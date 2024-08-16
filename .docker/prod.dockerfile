FROM harbor.arsolitt.ru/hub/node:22-alpine as builder
ENV TZ=Europe/Moscow
ENV NEXT_TELEMETRY_DISABLED 1
ENV HUSKY_SKIP_INSTALL 1
WORKDIR /src/app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --ignore-scripts
COPY . .
RUN yarn build

FROM harbor.arsolitt.ru/hub/node:22-alpine
ENV TZ=Europe/Moscow
ENV NEXT_TELEMETRY_DISABLED 1
ENV HUSKY_SKIP_INSTALL 1
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENV NODE_ENV production
USER node
EXPOSE 3000
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --ignore-scripts --production=true
COPY --chown=node --from=builder /src/app/public ./public
COPY --chown=node --from=builder /src/app/.next .next
COPY --chown=node --from=builder /src/app/next.config.mjs .
COPY --chown=node --from=builder /src/app/robots.txt .
ENTRYPOINT ["yarn"]
CMD ["start"]
