import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        add_cart: (state, action) => {
            console.log("recibo en redux: ")
            state.cart = [...state.cart,action.payload]
            console.log(state.cart)
        },
        delete_cart: (state, action) => {
            // Filtramos el carrito para remover el producto cuyo título coincide
            console.log("recibo en delete_cart: ")
         
            console.log(state.cart)
            state.cart = state.cart.filter(item => item.title !== action.payload.title);
        }
    }
})

export const {
    add_cart,
    delete_cart
} = cartSlice.actions

export default cartSlice.reducer