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
        fetchUsers: (state) => {
            state.loading = true
        },
        fetchUserSuccess: (state, action) => {
            state.loading = false
            state.list = action.payload
        },
        fetchUserFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }

    }
})

export const {
    fetchUsers,
    fetchUserSuccess,
    fetchUserFailure
} = userSlice.actions

export default userSlice.reducer