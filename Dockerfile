# Use Node.js 18 (The engine)
FROM node:18

# Create a folder inside the server
WORKDIR /app

# Copy the package files first (to install tools)
COPY package*.json ./

# Install the tools
RUN npm install

# Copy all your project files
COPY . .

# Hugging Face uses port 7860 by default
ENV PORT=7860
EXPOSE 7860

# Start the server
CMD ["node", "server.js"]