FROM node:20.11.1-bullseye-slim@sha256:bc0ff0ad6f4a4817cf28fcafafe8ed3c0c56197ef67ecd21dce4a6400047151a

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

