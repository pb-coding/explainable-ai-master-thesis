# Dockerfile
FROM node:16
LABEL org.opencontainers.image.source https://github.com/pb-coding/explainable-ai-master-thesis

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Serve the app using a lightweight HTTP server
FROM node:16-alpine

WORKDIR /app

COPY --from=0 /app/dist /app/dist
COPY --from=0 /app/node_modules /app/node_modules

EXPOSE 8080

CMD ["npx", "serve", "-s", "dist", "-l", "8080"]
