//NPM
const express = require('express')

//Router 
const router = express.Router()

//Services
const firebaseService = require('../../services/firebase')

//Create
//POST - Create new supplier
router.post('/create', (req, res) => {
  const supplier = {
    address: req.body.address,
    consortium: req.body.consortium,
    contactsDetails: req.body.contactsDetails,
    contactsName: req.body.contactsName,
    description: req.body.description,
    loginId: req.body.loginId,
    loginPassword: req.body.loginPassword,
    name: req.body.name,
    tags: req.body.tags
  }

  firebaseService.createNewSupplier(supplier, (err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json({ ...supplier, id: data.name })
    }
  })
})

//Read
//GET - Get all suppliers
router.get('/read', (req, res) => {
  firebaseService.getSuppliers((err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json(data)
    }
  })
})

//GET - Get a specific supplier
router.get('/read/:id', (req, res) => {
  const { id } = req.params

  firebaseService.getSupplierWithId(id, (err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json(data)
    }
  })
})

//Update
//PUT - Update a specific supplier
router.put('/update/:id', (req, res) => {
  const { id } = req.params

  const supplier = {
    address: req.body.address,
    consortium: req.body.consortium,
    contactsDetails: req.body.contactsDetails,
    contactsName: req.body.contactsName,
    description: req.body.description,
    loginId: req.body.loginId,
    loginPassword: req.body.loginPassword,
    name: req.body.name,
    tags: req.body.tags
  }

  firebaseService.updateSupplierWithId(id, supplier, (err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json({ ...supplier, id })
    }
  })
}) 

//Delete
//DELETE - Delete a specific supplier
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  
  firebaseService.deleteSupplierWithId(id, (err, data) => {
    if(err) {
      return res.json({ id })
    }
    if(data) {
      return res.json(data)
    }
  })
})

module.exports = router