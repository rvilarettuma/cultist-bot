FROM node:latest

# Create Directory
RUN mkdir -p /usr/src/cultist-bot
WORKDIR /usr/src/cultist-bot

# Copy and Install Bot
COPY package.json /usr/src/cultist-bot
RUN npm install

# Copy Project Over
COPY . /usr/src/cultist-bot

# Start Cultist-Bot
CMD ["node", "index.js"]

# Build container
# docker build -t cultist-bot .
# docker run -d cultist-bot