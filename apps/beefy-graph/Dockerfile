# Use the official Bun image
FROM oven/bun:1.3.1-alpine

# Set working directory
WORKDIR /app

# Copy root package files for workspace setup
COPY package.json bun.lockb* ./

# Copy the specific app package.json
COPY apps/beefy-graph/package.json ./apps/beefy-graph/

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
