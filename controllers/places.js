const { append } = require("express/lib/response");

// instantiate a new router from express package
const router = require("express").Router();

// GET response for /places
router.get("/", (req, res) => {
    res.send("GET /places");
})

// POST response for /places
router.post("/", (req, res) => {
    res.send("POST /places");
})

// export the created router
module.exports = router;