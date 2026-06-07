## Get started

## Manual installation-

- `npm install`
- update the .env add DB_URL (your mongo db url)
- Start the project locally
  - `npm run build`
  - `npm run start`

  ### OR
  - `npm run dev`

## Docker installation

- install docker
- RUN
  - docker network create app-network
  - docker run -d --name mongoDB --network app-network -p 27017:27017 mongo
  - docker build -t docker22 .
- start the image
  - `docker run -e DB_URL=mongodb://mongoDB:27017/myDB --network app-network -p 3000:3000 docker22`

## Docker Compose installation steps

- install docker
- Run
  - `docker-compose up`
