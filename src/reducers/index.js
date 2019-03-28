import { combineReducers } from 'redux'
import companyReducer from './userReducer'

export default combineReducers({
    user: companyReducer,
})