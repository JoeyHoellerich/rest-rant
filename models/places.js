// Create Schema for Places
const mongoose = require("mongoose");

// define a new schema called placeSchema
const placeShcema = new mongoose.Schema({
    // name of resturant
    name: {type: String, required: true},
    // url to photo 
    pic: {type: String, default: "/images/defaultImg.png"},
    // list of foods that are served
    cuisines: {type: String, required: true},
    // city the place is located
    city: {type: String, default: "Anytown"},
    // state the place is located
    state: {type: String, default: "USA"},
    // year the place was founded
    founded: {type: Number}
})

// define an instance method that can be run on a specific document in the database
placeShcema.methods.showEstablished = function() {
    // "this" refers to the document on which the method was called on
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

// export the Schema
// tell mongoose to use the placeSchema as the format of the data, and name it "Place"
module.exports = mongoose.model("Place", placeShcema)