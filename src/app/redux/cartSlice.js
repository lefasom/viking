import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        current_cart: (state, action) => {
            state.cart = action.payload
        }
    }
})

export const {
    current_cart,
} = cartSlice.actions

export default cartSlice.reducer