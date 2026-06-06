
import express from "express";
import { createClient } from "redis";

const app = express();

const redisClient = createClient({
    socket: {
        host: "redisDB",
        port: 6379,
    }
});


redisClient.on('error', (err) => {
    console.log("redis client error:- ", err);
})

async function connectToRedis() {
    await redisClient.connect();
    console.log("Connected to redis successfully");
}

await connectToRedis();

console.log("Hi from index.js");

app.get("/", (req, res) => {

    console.log("Hi from initial route");
    return res.status(200).json({ message: "Hi from initial route" });
})


app.listen(3000, () => { console.log("server started on port: ", 3000) });