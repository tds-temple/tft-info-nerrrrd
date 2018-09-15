//NPM
const express = require('express')

//Services
const authService = require('../../services/authentication')

//Router
const router = express.Router()

//Routes
//POST - Login user
router.post('/login', (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  }

  authService.login(user, (err, data) => {
    if(err) {
      return res.json({ error: err })
    }
    if(data) {
      return res.json(data)
    }
  })
})

//Logout

module.exports = router