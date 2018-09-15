//NPM
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const validator = require('express-validator')

//Apis
const resourcesApi = require('./api/resources')
const suppliersApi = require('./api/suppliers')
const usersApi = require('./api/users')
const authApi = require('./api/auth')

//Init
const PORT = 5000
const app = express()

//Middleware
app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(validator())

//Routers
app.use('/api/resources', resourcesApi)
app.use('/api/suppliers', suppliersApi)
app.use('/api/users', usersApi)
app.use('/api/auth', authApi)

//Index Route
app.get('/', (req, res) => {
  res.send('Index Route')
})

//Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}.`)
})