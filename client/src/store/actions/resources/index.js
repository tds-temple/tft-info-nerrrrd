//NPM
import axios from 'axios'

//Types
import {
  SET_RESOURCES_ALL,
  SET_RESOURCES_ERRORS
} from './types'

// payload {
//   suppliers: [{}]
// }
const setResourcesAll = payload => {
  return {
    type: SET_RESOURCES_ALL,
    payload
  }
}

// payload {
//   errors: [{}]
// }
const setResourcesErrors = payload => {
  return {
    type: SET_RESOURCES_ERRORS,
    payload
  }
}

export const initializeResources = () => dispatch => {
  axios.get('/api/resources/read')
  .then(res => {
    const data = res.data
    dispatch(setResourcesAll({ resources: data }))
  })
  .catch(err => {
    dispatch(setResourcesErrors({ errors: err }))
  })
}