# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your Next.js application files to the container
COPY . .

# Build your Next.js application for production
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Start your application
CMD [ "npm", "start" ]