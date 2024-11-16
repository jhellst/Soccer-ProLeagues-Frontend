# # Use Node.js official image as the base image
# FROM node:18

# # Set working directory in the container
# WORKDIR /app

# # Set the environment variable for PORT (Render expects this to be the port the app listens on)
# # ENV PORT 10000

# # Copy package.json and package-lock.json files first
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose the port that React will run on
# # EXPOSE 10000
# EXPOSE 3000


# # Command to start the React application
# CMD ["npm", "start"]




# Stage 1: Build the React application
FROM node:18 AS build-stage

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using NGINX
FROM nginx:1.23.4 AS production-stage

# Copy the build output from the previous stage to the NGINX public directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose the default NGINX port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
