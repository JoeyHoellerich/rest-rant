// require .env file package (allows us to include a .env file) - holds PORT
require("dotenv").config();

// require the express package
const express = require("express");
// instantiate express package
const app = express();

app.use("/places", require("./controllers/places"));

// get request for homepage
app.get("/", (req, res) => {
    res.send("Hello my Guy!");
})

// post request for homepage (TEST)
app.post("/", (req, res) => {
    res.send("This is a Post!")
})

// error 404 page (page not found)
app.get("*", (req, res) => {
    res.status(404).send("Happy Error 404");
})

// start web server
app.listen(process.env.PORT);