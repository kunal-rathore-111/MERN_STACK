
FROM oven/bun:alpine

WORKDIR /app

COPY ./package.json ./package.json

COPY ./bun.lock ./bun.lock

RUN bun install

COPY . .

ENV DB_URL=postgresql://myUser:mySecretPass123@postgresDB:5432/docker22DB

EXPOSE 3000

CMD [ "bun","dev" ]