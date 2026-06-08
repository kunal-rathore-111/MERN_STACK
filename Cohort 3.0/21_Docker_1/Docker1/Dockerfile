
FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json

COPY ./bun.lock ./bun.lock

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","index.js"]
