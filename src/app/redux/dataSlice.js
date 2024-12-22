import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data_array: [],
    },
    reducers: {
        current_data: (state, action) => {
            state.data_array = action.payload
        },
    }
})

export const {
    current_data,
    delete_card
} = dataSlice.actions

export default dataSlice.reducer