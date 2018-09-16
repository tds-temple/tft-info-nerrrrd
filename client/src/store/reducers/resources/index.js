//Types 
import {
  SET_RESOURCES_ALL,
  SET_RESOURCES_ERRORS
} from '../../actions/resources/types'

const initialState = {
  all: [],
  errors: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_RESOURCES_ALL:
      return { ...state, all: payload.resources }
    case SET_RESOURCES_ERRORS: 
      return { ...state, errors: payload.errors }
    default:
      return state
  }
}

export default reducer