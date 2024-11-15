# Fase de construcción
FROM node:14 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Fase de producción con Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./proxy/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
