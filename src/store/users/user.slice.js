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
        },
        deleteUserRequest: (state, action) => {
        },
        deleteUserSuccess: (state, action) => {
            const userId = action.payload
            state.list = state.list.filter(user => user.id !== userId)

            localStorage.setItem("users", JSON.stringify(state.list))
        },
        deleteUserFailure: (state, action) => {
            state.error = action.payload
        },
        updateUserRequest: (state, action) => {
        },
        updateUserSuccess: (state, action) => {
            const updateUser = action.payload
            const userIndex = state.list.findIndex(user => user.id === updateUser.id)

            if (userIndex > -1) {
                state.list[userIndex] = updateUser
                savedUsersToStorage(state.list)
            }
        },
        updateUserFailure: (state, action) => {
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
    createUserFailure,

    deleteUserRequest,
    deleteUserSuccess,
    deleteUserFailure,

    updateUserRequest,
    updateUserSuccess,
    updateUserFailure

} = userSlice.actions

export default userSlice.reducer