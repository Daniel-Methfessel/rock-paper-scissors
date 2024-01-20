FROM node:18-alpine as build
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]

