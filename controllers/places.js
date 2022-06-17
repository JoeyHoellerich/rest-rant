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
  // if items are left empty, set them to undefined
  if (!req.body.pic){
    req.body.pic = undefined
  }
  if (!req.body.city){
    req.body.city = undefined
  }
  if (!req.body.state){
    req.body.state = undefined
  }

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

router.get("/:id/comment", (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render("places/comment", {place})
  })
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})


// READ
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate("comments")
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
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


// DESTROY
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


// EDIT Form
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})



router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

// export the router to be used in index.js file 
module.exports = router
