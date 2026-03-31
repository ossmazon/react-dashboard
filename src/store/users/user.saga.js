import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure,

    createUserRequest,
    createUserSuccess,
    createUserFailure,

    deleteUserRequest,
    deleteUserSuccess,
    deleteUserFailure,

    updateUserRequest,
    updateUserSuccess,
    updateUserFailure
} from "./user.slice"
import { getUsersApi } from "./user.api";
import { v4 as uuidv4 } from "uuid"
import { toast } from "react-toastify";

function* onFetchUsers() {
    try {

        const saved = localStorage.getItem("users")

     /*    if (saved) {
            yield put(fetchUsersSuccess(JSON.parse(saved)))
            return
        } */

        const response = yield call(getUsersApi)
        yield put(fetchUsersSuccess(response.data))
        toast.success("Success loading users")
    } catch (error) {
        yield put(fetchUsersFailure(error.message))
        toast.error("Error loading users")
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
        yield put(createUserSuccess(newUser))
        toast.success(`User ${action.payload.name} created successfully`)
    } catch (error) {
        yield put(createUserFailure("Failed to create user"))
        toast.error("Failed to create user")
    }
}

function* handleDeleteUser(action) {
    try {
        const userId = action.payload.id
        yield delay(300)
        yield put(deleteUserSuccess(userId))
        toast.success(`User ${action.payload.name} deleted succesfully`)
    } catch (error) {
        yield put(deleteUserFailure("Failed to delete user"))
        toast.error(`failed to delete user ${action.payload.name}`)
    }
}

function* handleUpdateUser(action) {
    try {
        const updateUser = action.payload
        yield delay(300)
        yield put(updateUserSuccess(updateUser))
        toast.success(`User ${action.payload.name} updated succesfully`)
    } catch (error) {
        yield put(updateUserFailure("Faile to update user"))
        toast.error(`failed to update user ${action.payload.name}`)
    }
}

export default function* usersSaga() {
    yield takeLatest(fetchUsersRequest.type, onFetchUsers)
    yield takeLatest(createUserRequest.type, handleCreateUser)
    yield takeLatest(deleteUserRequest.type, handleDeleteUser)
    yield takeLatest(updateUserRequest.type, handleUpdateUser)
}