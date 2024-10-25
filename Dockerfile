# Stage 1: Build the Angular app
FROM node:alpine as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built app to Nginx's serve directory
COPY --from=build /usr/src/app/dist/netflix-clone/browser /usr/share/nginx/html

# Copy a custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]