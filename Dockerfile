# Use Node.js official image as the base image
FROM node:18

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that React will run on
EXPOSE 3000

# Command to start the React application
CMD ["npm", "start"]
