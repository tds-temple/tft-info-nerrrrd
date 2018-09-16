//Action Types
import {
  SET_SUPPLIERS_ALL,
  SET_SUPPLIERS_ERRORS
} from '../../actions/suppliers/types'

const initialState = {
  all: [],
  errors: []
}

const reducer = (state = initialState, { type, payload}) => {
  switch(type) {
    case SET_SUPPLIERS_ALL:
      return { ...state, all: payload.suppliers }
    case SET_SUPPLIERS_ERRORS:
      return { ...state, errors: payload.errors }
    default:
      return state
  }
}

export default reducer