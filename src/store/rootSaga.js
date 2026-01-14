import {all} from "redux-saga/effects"
import usersSaga from "./users/user.saga"

export default function*(){
    yield all([
        usersSaga()
    ])
}