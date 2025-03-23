# Builder
FROM node:22.14.0-alpine AS builder

WORKDIR /usr/app

COPY . .

RUN npm ci && npm run build

# Runner
FROM node:22.14.0-alpine AS runner

WORKDIR /usr/app

COPY tsconfig.json .
COPY tsconfig.build.json .
COPY --from=builder /usr/app/package*.json .
COPY --from=builder /usr/app/dist ./dist
COPY --from=builder /usr/app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]