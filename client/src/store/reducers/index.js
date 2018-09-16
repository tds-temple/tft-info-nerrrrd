//NPM
import { combineReducers } from 'redux'

//Reducers
import resourcesReducer from './resources'
import suppliersReducer from './suppliers'
import usersReducer from './users'

export default combineReducers({
  resources: resourcesReducer,
  suppliers: suppliersReducer,
  users: usersReducer
})