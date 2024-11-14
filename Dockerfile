# Use Node.js official image as the base image
FROM node:18

# Set working directory in the container
WORKDIR /app

# Set the environment variable for PORT (Render expects this to be the port the app listens on)
ENV PORT 10000

# Copy package.json and package-lock.json files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that React will run on
EXPOSE 10000

# Command to start the React application
CMD ["npm", "start"]
