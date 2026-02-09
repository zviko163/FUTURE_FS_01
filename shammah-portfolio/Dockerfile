# Build the React Application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci 
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx (Lightweight)
FROM nginx:alpine
# Copy the built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html
# Copy a simple nginx config for the container (we will create this next)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]