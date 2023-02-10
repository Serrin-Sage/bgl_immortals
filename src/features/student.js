import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    value: {
        name: ""
    }
}

export const studentSlice = createSlice({
    name: "student",
    initialState: initialStateValue,

    reducers: {
        selectStudent: (state, action) => {
            state.value = action.payload
        },

        deselectStudent: (state) => {
            state.value = initialStateValue
        }
    }
})

export const { selectStudent, deselectStudent } = studentSlice.actions
export default studentSlice.reducer