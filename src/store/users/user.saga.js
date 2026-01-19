import { call, put, takeLatest, delay, select } from "redux-saga/effects";
import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure,

    createUserRequest,
    createUserSuccess,
    createUserFailure,
} from "./user.slice"
import { getUsersApi } from "./user.api";
import { v4 as uuidv4 } from "uuid"

function* onFetchUsers() {
    try {

        const saved = localStorage.getItem("users")
        
        if (saved) {
            yield put(fetchUsersSuccess(JSON.parse(saved)))
            return
        }

        const response = yield call(getUsersApi)
        yield put(fetchUsersSuccess(response.data))
    } catch (error) {
        yield put(fetchUsersFailure(error.message))
    }
}

function* handleCreateUser(action) {
    try {
        yield delay(500)
        const newId = uuidv4().slice(0, 5)

        const newUser = {
            id: newId,
            ...action.payload
        }
        console.log("new User", newUser)
        yield put(createUserSuccess(newUser))
    } catch (error) {
        yield put(createUserFailure("Failed to create user"))
    }
}

export default function* usersSaga() {
    yield takeLatest(fetchUsersRequest.type, onFetchUsers)
    yield takeLatest(createUserRequest.type, handleCreateUser)
}