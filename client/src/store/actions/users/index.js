//NPM
import axios from 'axios'

//Types
import {
  SET_USERS_ALL,
  SET_USERS_ERRORS
} from './types'

// payload {
//   users: [{}]
// }
const setUsersAll = payload => {
  return {
    type: SET_USERS_ALL,
    payload
  }
}

// payload {
//   errors: [{}]
// }
const setUsersErrors = payload => {
  return {
    type: SET_USERS_ERRORS,
    payload
  }
}

export const initializeUsers = () => dispatch => {
  axios.get('/api/users/read')
  .then(res => {
    const data = res.data
    dispatch(setUsersAll({ users: data }))
  })
  .catch(err => {
    dispatch(setUsersErrors({ errors: err }))
  })
}