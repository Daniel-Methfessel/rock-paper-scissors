FROM node:18-alpine AS build
WORKDIR /app/src
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/local/bin
COPY --from=build /app/src/build /usr/share/nginx/html
COPY --from=build /app/src/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

