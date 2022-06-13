// get variables from .env file (PORT, URI)
require("dotenv").config();

// Connecting to Mongoose
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Eventually we will have more than one Schema to export, so we want to export each item separetely
// The first export is the Schema defined in ./places.js (model for place data)
module.exports.Place = require("./places.js")