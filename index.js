const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello my Guy!");
})

app.post("/", (req, res) => {
    res.send("This is a Post!")
})

app.listen(3000);