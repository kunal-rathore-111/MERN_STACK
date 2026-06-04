
import express from "express";
const app = express();

console.log("Hi from index.js");

app.get("/", (req, res) => {

    console.log("Hi from initial route");
    return res.status(200).json({ message: "Hi from initial route" });
})


app.listen(3000, () => { console.log("server started on port: ", 3000) });