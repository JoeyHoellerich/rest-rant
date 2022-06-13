// get database connection and place schema
const db = require("../models")

// create new places to add to our database
db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}])
.then(() => {
    console.log("Success!");
    // we don't want this script to continue running after we call it, so close it after new data created
    process.exit();
})
.catch(err => {
    console.log("error:", err)
    process.exit();
})
