const { append } = require("express/lib/response");

// instantiate a new router from express package
const router = require("express").Router();


//MOCK DATA
// get MOCK data from /models/places.js
const places = require("../models/places.js")

// NEW
router.get("/new", (req, res) => {
    res.render("places/new")
})

// GET response for /places
router.get("/", (req, res) => {     
    // render view from ./views/places/index
    // pass in data from "places" array
    res.render("places/index.jsx", {places});
})

// POST response for /places
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }

  // add new data to places array
  places.push(req.body)
  res.redirect('/places')
})

// DELETE
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render("error404");
  }
  else if (!places[id]) {
    res.render("error404");
  }
  else {
    places.splice(id, 1);
    res.redirect("/places")
  }
})

router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)){
    res.render("error404")
  }
  else if (!places[id]){
    res.render("error404");
  }
  else {
    res.render("places/show",
     { place: places[id], id });
  }
})

router.get("/:arrayIndex", (req, res) => {
  res.send(places[req.params.arrayIndex]);
})
  

// export the created router
module.exports = router;