import { createSlice } from "@reduxjs/toolkit";


export const linkSlice = createSlice({
    name: "link",
    initialState: { value: { type: "" } },

    reducers: {
        getLinkType: (state, action) => {
            state.value = action.payload
        },

    }
})

export const { getLinkType } = linkSlice.actions
export default linkSlice.reducer