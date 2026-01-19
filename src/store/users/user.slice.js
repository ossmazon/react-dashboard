import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [],
    loading: false,
    error: null
}

const loadUsersFromStorage = () => {
    const saved = localStorage.getItem("users")
    return saved ? JSON.parse(saved) : null
}

const savedUsersToStorage = (users) => {
    localStorage.setItem("users", JSON.stringify(users))
}

const userSlice = createSlice({
    name: "users",
    initialState: {
        list: loadUsersFromStorage() || [],
        loading: false,
        error: null
    },
    reducers: {
        fetchUsersRequest: (state) => {
            state.loading = true
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false
            state.list = action.payload
            savedUsersToStorage(state.list)
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        createUserRequest: (state, action) => {

        },
        createUserSuccess: (state, action) => {
            state.list.push(action.payload)
            savedUsersToStorage(state.list)
        },
        createUserFailure: (state, action) => {
            state.error = action.payload
        }

    }
})

export const {

    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure,

    createUserRequest,
    createUserSuccess,
    createUserFailure
} = userSlice.actions

export default userSlice.reducer