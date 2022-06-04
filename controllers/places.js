const { append } = require("express/lib/response");

// instantiate a new router from express package
const router = require("express").Router();

//MOCK DATA
// create variable to hold places (MOCK DATA)
let places = [
    {
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thaiFood.jpg'
    }, 
    {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffeeFood.jpg'
    }
]

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

router.get("/:arrayIndex", (req, res) => {
    res.send(places[req.params.arrayIndex]);
})

// POST response for /places
router.post("/", (req, res) => {
    console.log(req.body)
    res.send("POST /places");
})

// export the created router
module.exports = router;