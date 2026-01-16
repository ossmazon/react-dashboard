import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [],
    loading: false,
    error: null
}
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        fetchUsersRequest: (state) => {
            state.loading = true
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false
            state.list = action.payload
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        createUserRequest: (state, action) => {

        },
        createUserSuccess: (state, action) => {
            state.list.push(action.payload)
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