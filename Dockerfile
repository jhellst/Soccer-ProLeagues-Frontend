# Use Node.js official image as the base image
FROM node:18

# Set working directory in the container
WORKDIR /app

# Install dependencies
COPY /package*.json /app/
RUN npm install

# Copy the rest of the application
COPY / /app/

# Expose the port that React will run on
EXPOSE 3000

# Command to start the React application
CMD ["npm", "start"]
