# Dockerfile
FROM node:16 as build
LABEL org.opencontainers.image.source https://github.com/pb-coding/explainable-ai-master-thesis

WORKDIR /app

COPY package*.json ./
RUN npm ci

# Increase the open files limit for build process
RUN ulimit -n 2048

COPY . ./
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Serve the app using a lightweight HTTP server
FROM node:16

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 8080

CMD ["npx", "serve", "-s", "dist", "-l", "8080"]