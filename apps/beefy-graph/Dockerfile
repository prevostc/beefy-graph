# Use the official Bun image
FROM oven/bun:1.3.1-alpine

# Set working directory
WORKDIR /app

# Copy root package files for workspace setup
COPY package.json bun.lockb* ./
COPY apps/beefy-graph/package.json ./apps/beefy-graph/
COPY packages/beefy-db-dev-client/package.json ./packages/beefy-db-dev-client/
COPY packages/beefy-logger/package.json ./packages/beefy-logger/

# Install dependencies (this will install workspace dependencies)
RUN bun install --frozen-lockfile

# Copy the entire source code
COPY . .

# Set working directory to the specific app
WORKDIR /app/apps/beefy-graph

# Expose the port (default Bun server port is 3000)
EXPOSE 3000

# Start the application
CMD ["bun", "run", "src/server.ts"]
