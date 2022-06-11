// define new router from Express
const router = require('express').Router()

// Locate our Data (folder where our models are) - automatically pull from index.js?
const db = require("../models")

// Landing page for url.com/places
router.get('/', (req, res) => {
  // index.js holds connections for rest-rant databases
  // go into Place database, and find all the records
  db.Place.find()
    .then((places) => {
      // render the places page, pass in the data found in the database
      res.render("places/index", {places})
    })
    // if there is an error getting the data
    .catch(error => {
      // log the error in the console
      console.log(error);
      // render our 404 page
      res.render("error404")
    })
})

// how we send the database new data
router.post('/', (req, res) => {
  // create a new document in the database using the Place Schema
  // pass in the request body key-value pairs
  db.Place.create(req.body)
  // after new data is created, redirect the user to the url.com/places page
    .then(() => res.redirect("/places"))
    // if there is an error adding data to database
    .catch(error => {
      // console log the error
      console.log(error)
      // render our 404 page
      res.render("error404")
    })
})

// CREATE 
router.get('/new', (req, res) => {
  res.render('places/new')
})

// READ
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


// UPDATE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// DESTROY
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// EDIT Form
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})


router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

// export the router to be used in index.js file 
module.exports = router
