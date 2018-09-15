//NPM
const express = require('express')

//Router 
const router = express.Router()

//Services
const firebaseService = require('../../services/firebase')

//Create
//POST - Create new resource
router.post('/create', (req, res) => {
  const resource = {
    name: req.body.name,
    address: req.body.address
  }

  firebaseService.createNewResource(resource, (err, data) => {
    if(err) {
      return res.json({ error: err })
    } 
    if(data) {
      return res.json({ ...resource, id: data.name })
    }
  })
})

//Read
//GET - Get all resources
router.get('/read', (req, res) => {
  firebaseService.getResources((err, data) => {
    if(err) { 
      return res.json({ error: err })
    }
    if(data) {
      return res.json(data)
    }
  })
})

//GET - Get a specific resource
router.get('/read/:id', (req, res) => {
  const { id } = req.params

  firebaseService.getResourceWithId(id, (err, data) => {
    if(err) {
      res.json({ error: err })
    }
    if(data) {
      res.json(data)
    }
  })
})

//Update
//PUT - Update a specific resource
router.put('/update/:id', (req, res) => {
  const { id } = req.params
  
  const resource = {
    name: req.body.name,
    address: req.body.address
  }

  firebaseService.updateResourceWithId(id, resource, (err, data) => {
    if(err) {
      res.json({ error: err })
    }
    if(data) {
      res.json({ ...data, id })
    }
  })
}) 

//Delete
//DELETE - Delete a specific resource
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  
  firebaseService.deleteResourceWithId(id, (err, data) => {
    if(err) {
      res.json({ error: err })
    }
    if(data) {
      res.json(data)
    }
  })
})

module.exports = router