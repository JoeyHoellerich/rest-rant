// require .env file package (allows us to include a .env file) - holds PORT
require("dotenv").config();

// require the express package
const express = require("express");
// instantiate express package
const app = express();

// configure settings for express
// view engine: jsx
app.set("view engine", "jsx");
// create react view engine (lang, callback to create engine)
app.engine("jsx", require("express-react-views").createEngine());

// controller path to places
app.use("/places", require("./controllers/places"));

// get request for homepage
app.get("/", (req, res) => {
    // render page from ./views/home.jsx
    res.render("home");
})

// post request for homepage (TEST)
app.post("/", (req, res) => {
    res.send("This is a Post!")
})

// error 404 page (page not found)
app.get("*", (req, res) => {
    // render page from ./views/error404
    res.render("error404");
})

// start web server
app.listen(process.env.PORT);