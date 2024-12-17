import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'card',
    initialState: {
        card_array: [],
    },
    reducers: {
        current_card: (state, action) => {
            state.card_array = action.payload
        },
        delete_card: (state, action) => {
            const cards = state.card_array.filter((e) => { return (e.id != action.payload) })
            state.card_array = cards
        },
    }
})

export const {
    current_card,
    delete_card
} = dataSlice.actions

export default dataSlice.reducer