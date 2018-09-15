//NPM
const express = require('express')

//Services
const firebaseService = require('../../services/firebase') 

//Router 
const router = express.Router()

//Create
//POST - Create new user
router.post('/create', (req, res) => {
  const user = {
    bio: req.body.bio,
    email: req.body.email,
    facebook: req.body.facebook,
    favorites: req.body.favorites,
    linkedIn: req.body.linkedIn,
    location: req.body.location,
    name: req.body.name,
    phone: req.body.phone,
    twitter: req.body.twitter,
    url: req.body.url,
    username: req.body.username
  }

  firebaseService.createNewUser(user, (err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json({ ...user, id: data.name })
    }
  })
})

//Read
//GET - Get all users
router.get('/read', (req, res) => {
  firebaseService.getUsers((err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json(data)
    }
  })
})

//GET - Get a specific user
router.get('/read/:id', (req, res) => {
  const { id } = req.params

  firebaseService.getUserWithId(id, (err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json(data)
    }
  })
})

//Update
//PUT - Update a specific user
router.put('/update/:id', (req, res) => {
  const { id } = req.params 

  const user = {
    bio: req.body.bio,
    email: req.body.email,
    facebook: req.body.facebbok,
    favorites: req.body.favorites,
    linkedIn: req.body.linkedIn,
    location: req.body.location,
    name: req.body.name,
    phone: req.body.phone,
    twitter: req.body.twitter,
    url: req.body.url,
    username: req.body.username
  }

  firebaseService.updateUserWithId(id, user, (err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json({ ...user, id })
    }
  })
}) 

//Delete
//DELETE - Delete a specific user
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  
  firebaseService.deleteUserWithId(id, (err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json(data)
    }
  })
})

module.exports = router