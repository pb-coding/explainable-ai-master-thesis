# Dockerfile
FROM node:18
LABEL org.opencontainers.image.source https://github.com/pb-coding/explainable-ai-master-thesis

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]