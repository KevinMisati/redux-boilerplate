import counterReducer from "./conter"
import isLoggedReducer from "./isLogged"
import {combineReducers} from "redux"

const allReducers = combineReducers({
    counter:counterReducer,
    isLogged:isLoggedReducer
})

export default allReducers