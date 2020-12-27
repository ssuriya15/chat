import { combineReducers } from "redux";
import loginReducer from './Reducer/loginReducer'
import profileReducer from './Reducer/loginReducer'

const rrducer = combineReducers({
    loginReducer,
    profileReducer
})

export default rrducer