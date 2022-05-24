require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello my Guy!");
})

app.post("/", (req, res) => {
    res.send("This is a Post!")
})

app.get("*", (req, res) => {
    res.send("Happy Error 404");
})

app.listen(process.env.PORT);