//NPM
const axios = require('axios')

//Base Firebase Url
const BASE_URL = 'https://tft-testing.firebaseio.com/'

/////////////////////////////////Resources///////////////////////////////////////////////////////////////
const createNewResource = (resourceData, cb) => {
  axios.post(`${BASE_URL}resources.json`, resourceData)
  .then(res => {
    const data = res.data
    cb(null, { ...data })
  })
  .catch(err => {
    cb(err, null)
  })
}

const getResources = cb => {
  const resources = []
  axios.get(`${BASE_URL}resources.json`)
  .then(res => {
    const data = res.data
    for(let key in data) {
      resources.push({
        ...data[key],
        id: key
      })
    }
    cb(null, resources)
  })
  .catch(err => {
    cb(err, null)
  })
}

const getResourceWithId = (id, cb) => {
  axios.get(`${BASE_URL}resources/${id}.json`)
  .then(res => {
    const data = { ...res.data, id: id }
    cb(null, data)
  })
  .catch(err => {
    cb(err, null)
  })
}

const updateResourceWithId = (id, resourceData, cb) => {
  axios.put(`${BASE_URL}resources/${id}.json`, resourceData)
  .then(res => {
    const data = res.data
    cb(null, data)
  })
  .catch(err => {
    cb(err, null)
  })
}

const deleteResourceWithId = (id, cb) => {
  axios.delete(`${BASE_URL}resources/${id}.json`)
  .then(res => {
    const data = { id }
    cb(null, data)
  })
  .catch(err => {
    cb(err, null)
  })
}

//////////////////////////////////////////////Suppliers//////////////////////////////////////////////////////
const createNewSupplier = (supplierData, cb) => {
  axios.post(`${BASE_URL}suppliers.json`, supplierData)
  .then(res => {
    const data = res.data
    cb(null, data)
  })
  .catch(err => {
    cb(err, null)
  })
}

const getSuppliers = cb => {
  const suppliers = []
  axios.get(`${BASE_URL}suppliers.json`)
  .then(res => {
    const data = res.data
    for(let key in data) {
      suppliers.push({
        ...data[key],
        id: key
      })
    }
    cb(null, suppliers)
  })
  .catch(err => {
    cb(err, null)
  })
}

const getSupplierWithId = (id, cb) => {
  axios.get(`${BASE_URL}suppliers/${id}.json`)
  .then(res => {
    const data = res.data
    cb(null, { ...data, id: id })
  })
  .catch(err => {
    cb(err, null)
  })
}

const updateSupplierWithId = (id, supplierData, cb) => {
  axios.put(`${BASE_URL}suppliers/${id}.json`, supplierData)
  .then(res => {
    const data = res.data
    cb(null, data)
  })
  .catch(err => {
    cb(err, null)
  })
}

const deleteSupplierWithId = (id, cb) => {
  axios.delete(`${BASE_URL}suppliers/${id}.json`)
  .then(res => {
    cb(null, { id })
  })
  .catch(err => {
    cb(err, null)
  })
}

////////////////////////////////////////////Users/////////////////////////////////////////////////////////////
const createNewUser = (user, cb) => {
  axios.post(`${BASE_URL}users.json`, user)
  .then(res => {
    const data = res.data
    cb(null, data)
  })
  .catch(err => {
    cb(err, null)
  })
}

const getUsers = cb => {
  const users = []
  axios.get(`${BASE_URL}users.json`)
  .then(res => {
    const data = res.data
    for(let key in data) {
      users.push({
        ...data[key],
        id: key
      })
    }
    cb(null, users)
  })
  .catch(err => {
    cb(err, null)
  })
}

const getUserWithId = (id, cb) => {
  axios.get(`${BASE_URL}users/${id}.json`)
  .then(res => {
    const data = res.data
    cb(null, { ...data, id })
  })
  .catch(err => {
    cb(err, null)
  })
}

const updateUserWithId = (id, userData, cb) => {
  axios.put(`${BASE_URL}users/${id}.json`, userData)
  .then(res => {
    const data = res.data
    cb(null, data)
  })
  .catch(err => {
    cb(err, null)
  })
}

const deleteUserWithId = (id, cb) => {
  axios.delete(`${BASE_URL}users/${id}.json`)
  .then(res => {
    cb(null, { id })
  })
  .catch(err => {
    cb(err, null)
  })
}

module.exports = {
  createNewResource,
  getResources,
  getResourceWithId,
  updateResourceWithId,
  deleteResourceWithId,

  createNewSupplier,
  getSuppliers,
  getSupplierWithId,
  updateSupplierWithId,
  deleteSupplierWithId,
  
  createNewUser,
  getUsers,
  getUserWithId,
  updateUserWithId,
  deleteUserWithId
}