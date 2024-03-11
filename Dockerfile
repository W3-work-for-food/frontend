# Use an official Node.js runtime as a parent image
FROM node:20.11.1

# Set the working directory to /app
WORKDIR /app

COPY . /app

# Install project dependencies using Yarn
RUN yarn install

# Make port 3000 available to the world outside this container
EXPOSE 80

# Run the build script using Yarn
CMD ["yarn", "build"]

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html
COPY --from=build /app/nginx.conf /etc/nginx/sites-available/default
EXPOSE 80
CMD ["nginx","-g","daemon off;"]