import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchUsers,
    fetchUserSuccess,
    fetchUserFailure
} from "./user.slice"
import { getUsersApi } from "./user.api";

function* onFetchUsers() {
    try {
        const response = yield call(getUsersApi)
        yield put(fetchUserSuccess(response.data))
    } catch (error) {
        yield put(fetchUserFailure(error.message))
    }
}

export default function* usersSaga() {
    yield takeLatest(fetchUsers.type, onFetchUsers)
}