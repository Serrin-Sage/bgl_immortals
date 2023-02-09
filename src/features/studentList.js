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

        removeFromList: (state, action) => {
            console.log(state.value)
            state.value = state.value.filter(item => item.id !== action.payload)
        }

    }
})

export const { createList, editList, removeFromList } = studentListSlice.actions
export default studentListSlice.reducer