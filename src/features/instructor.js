import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { value: {} }

export const instructorSlice = createSlice({
    name: "instructor",
    initialState: { value: {} },

    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = initialStateValue
        }
    }
})

export const { login, logout } = instructorSlice.actions
export default instructorSlice.reducer