import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users/user.slice"

const rootReducer = combineReducers({
    users: userReducer
})

export default rootReducer