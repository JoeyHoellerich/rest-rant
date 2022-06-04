// require .env file package (allows us to include a .env file) - holds PORT
require("dotenv").config();

// require the express package
const express = require("express");
// instantiate express package
const app = express();

// configure settings for express
// the view folder can be found ./views
app.set("views", __dirname + "/views");
// view engine: jsx
app.set("view engine", "jsx");
// create react view engine (lang, callback to create engine)
app.engine("jsx", require("express-react-views").createEngine());

// show static file locations (CSS)
// our static files will be located ./public 
app.use(express.static("public"));

// data sent to server is encoded, need to let the server know so that it can decode it
app.use(express.urlencoded({ extended: true }))


// controller path to places
app.use("/places", require("./controllers/places"));

// get request for homepage
app.get("/", (req, res) => {
    // render page from ./views/home.jsx
    res.render("home");
})

// error 404 page (page not found)
app.get("*", (req, res) => {
    // render page from ./views/error404
    res.render("error404");
})

// start web server
app.listen(process.env.PORT);