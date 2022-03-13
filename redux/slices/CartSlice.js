import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const checkIfFoodExists = state.items.findIndex((item) => item.name === action.payload.name);
            if (checkIfFoodExists !== -1) {
                const newQuantity = state.items[checkIfFoodExists].quantity + 1;
                state.items[checkIfFoodExists] = {
                  ...state.items[checkIfFoodExists],
                  quantity: newQuantity,
                  totalPrice: newQuantity * state.items[checkIfFoodExists].pricePerItem,
                };
                }else{
                    state.items = [action.payload, ...state.items];
                }
        },
        increaseQuantity: (state, action) => {
            const productIndex = state.items.findIndex(
              (item) => item.id === action.payload
            );
            const newQuantity = state.items[productIndex].quantity + 1;
            state.items[productIndex] = { 
              ...state.items[productIndex],
              quantity: newQuantity,
              totalPrice: newQuantity * state.items[productIndex].pricePerItem,
            };
          },
        decreaseQuantity: (state, action ) => {
        const productIndex = state.items.findIndex(
            (item) => item.id === action.payload
          );
          const newQuantity = state.items[productIndex].quantity - 1;
          if (newQuantity >= 1) {
            state.items[productIndex] = {
              ...state.items[productIndex],
              quantity: newQuantity,
              totalPrice: newQuantity * state.items[productIndex].pricePerItem,
            };
          }
        },
        deleteItem: (state, action) => {
            // const item = state.items.filter((item) => item.id !== action.payload);
            // console.log(item);
            state.items = state.items.filter((item) => item.id !== action.payload);
          },
          clearCart: (state) => {
            state.items = [];
          },
    },
});

export const {addToCart, increaseQuantity, decreaseQuantity, deleteItem,clearCart,} = cartSlice.actions;
export default cartSlice.reducer;