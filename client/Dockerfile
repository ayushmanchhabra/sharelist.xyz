FROM node:20.11.1-bullseye-slim

LABEL org.opencontainers.image.source="https://github.com/ayushmanchhabra/sharelist.xyz"
LABEL org.opencontainers.image.description="sharelist.xyz client"

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
