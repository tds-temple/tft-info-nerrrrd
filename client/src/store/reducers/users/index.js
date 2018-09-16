//Action Types
import {
  SET_USERS_ALL,
  SET_USERS_ERRORS
} from '../../actions/users/types'

const initialState = {
  all: [],
  errors: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_USERS_ALL:
      return { ...state, all: payload.users }
    case SET_USERS_ERRORS:
      return { ...state, errors: payload.errors }
    default:
      return state
  }
}

export default reducer