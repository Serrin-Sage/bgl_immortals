import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    list: []
}

export const studentListSlice = createSlice({
    name: "studentlist",
    initialState: { value: [] },

    reducers: {
        createList: (state, action) => {
            state.value = action.payload
        },

        editList: (state, action) => {
            state.value.list = [...state.value.list, action.payload]
        },

    }
})

export const { createList, editList } = studentListSlice.actions
export default studentListSlice.reducer