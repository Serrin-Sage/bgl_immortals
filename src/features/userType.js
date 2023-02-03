import { createSlice } from "@reduxjs/toolkit";


export const userTypeSlice = createSlice({
    name: "usertype",
    initialState: { value: { usertype: "" } },

    reducers: {
        changeUserType: (state, action) => {
            state.value = action.payload
        },

    }
})

export const { changeUserType } = userTypeSlice.actions
export default userTypeSlice.reducer