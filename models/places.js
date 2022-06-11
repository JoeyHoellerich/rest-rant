// Create Schema for Places
const mongoose = require("mongoose");

// define a new schema called placeSchema
const placeShcema = new mongoose.Schema({
    // name of resturant
    name: {type: String, required: true},
    // url to photo 
    pic: {type: String, default: "https://res.cloudinary.com/dtpgi0zck/image/upload/s--ObAKLSo7--/c_fill,h_580,w_860/v1/EducationHub/photos/sonoran-desert.jpg"},
    // list of foods that are served
    cuisines: {type: String, required: true},
    // city the place is located
    city: {type: String, default: "Anytown"},
    // state the place is located
    state: {type: String, default: "USA"},
    // year the place was founded
    founded: {type: Number}
})

// export the Schema
// tell mongoose to use the placeSchema as the format of the data, and name it "Place"
module.exports = mongoose.model("Place", placeShcema)