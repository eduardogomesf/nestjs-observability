# Builder
FROM node:22.14.0-alpine AS builder

WORKDIR /usr/app

COPY . .

RUN npm ci && npm run build

# Runner
FROM node:22.14.0-alpine AS runner

WORKDIR /usr/app

COPY tsconfig.json .
COPY tsconfig-build.json .
COPY --from=builder /usr/app/package*.json .

RUN npm install --omit=dev

COPY --from=builder /usr/app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]