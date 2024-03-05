# Use an official Node.js runtime as a parent image
FROM node:20.11.1

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Remove package-lock.json and node_modules directory
# RUN rm -rf package-lock.json node_modules

# Install Yarn using npm
# RUN npm install -g yarn --force

# Install project dependencies using Yarn
RUN yarn install
# RUN yarn add @esbuild/linux-x64

# Make port 3000 available to the world outside this container
EXPOSE 8001

# Define environment variable
ENV NODE_ENV=development

# Run the build script using Yarn
CMD ["yarn", "dev"]
