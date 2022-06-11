FROM node:16.13.0-alpine as builder

COPY ./ ./app

WORKDIR /app

COPY package.json package-lock.json ./app/

RUN npm install --force

RUN npm run build:prod



FROM nginx:1.17.10-alpine

EXPOSE 80

COPY --from=builder /app/dist/hackathon-webui /usr/share/nginx/html
