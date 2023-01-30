import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { value: {} }

export const userSlice = createSlice({
    name: "user",
    initialState: { value: {}},

    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = initialStateValue
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer