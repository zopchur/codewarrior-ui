FROM node:latest as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm cache clean --force
RUN npm install --force
COPY . /app
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/docs /usr/share/nginx/html
