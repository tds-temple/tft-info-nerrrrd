//NPM
import axios from 'axios'

//Types
import {
  SET_SUPPLIERS_ALL,
  SET_SUPPLIERS_ERRORS
} from './types'

// payload {
//   suppliers:[{}]
// }
const setSuppliersAll = payload => {
  return {
    type: SET_SUPPLIERS_ALL,
    payload
  }
}

// payload {
//   errors: [{}]
// }
const setSuppliersErrors = payload => {
  return {
    type: SET_SUPPLIERS_ERRORS,
    payload
  }
}

export const initializeSuppliers = () => dispatch => {
  axios.get('/api/suppliers/read')
  .then(res => {
    const data = res.data
    dispatch(setSuppliersAll({ suppliers: data }))
  })
  .catch(err => {
    dispatch(setSuppliersErrors({ errors: err }))
  })
}

