FROM node:18-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/app
EXPOSE 80
COPY --from=build /app/src/dist/rock-paper-scissors/server ./
COPY --from=build /app/src/nginx.conf /etc/nginx/conf.d/default.conf
CMD node server.mjs

