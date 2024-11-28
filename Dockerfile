# Fase de construcción
FROM node:14 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build

# Fase de producción
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
