# First stage: build environment
FROM node:18-alpine AS build

# Create and set a non-root user
RUN addgroup -S health-app && adduser -S -G health-app health-app

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to avoid reinstalling dependencies unnecessarily
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the application (if applicable)
# You can skip this step if you're not using any build step like Webpack, TypeScript, etc.
RUN npm run build

# Second stage: production environment
FROM node:18-alpine

# Create and set a non-root user again in the production environment
RUN addgroup -S health-app && adduser -S -G health-app health-app

# Set the working directory
WORKDIR /app

# Copy only necessary files from the build stage (node_modules, build output, etc.)
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app ./

# Set appropriate permissions
RUN chown -R health-app:health-app .

# Use the non-root user
USER health-app

# Expose the port the app will run on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
