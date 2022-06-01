const { append } = require("express/lib/response");

// instantiate a new router from express package
const router = require("express").Router();

// GET response for /places
router.get("/", (req, res) => {
    // create variable to hold places
    let places = [
        {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
        }, 
        {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
        }
    ]
          
    // render view from ./views/places/index
    // pass in data from "places" array
    res.render("places/index.jsx", {places});
})

// POST response for /places
router.post("/", (req, res) => {
    res.send("POST /places");
})

// export the created router
module.exports = router;