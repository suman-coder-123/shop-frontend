import { createSlice } from "@reduxjs/toolkit";


// GET CART FROM LOCAL STORAGE
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];



const initialState = {
  cartItems: cartItemsFromStorage,
};



const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    // ADD TO CART
    addToCart: (state, action) => {

      const item = action.payload;

      const existItem = state.cartItems.find(
        (x) =>
          x._id === item._id &&
          x.selectedSize === item.selectedSize &&
          x.selectedColor === item.selectedColor
      );

      if (existItem) {

        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id
            ? item
            : x
        );

      } else {

        state.cartItems.push(item);

      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },



    // REMOVE FROM CART
    removeFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },



    // UPDATE QUANTITY
    updateQuantity: (state, action) => {

      const { id, quantity } = action.payload;

      const item = state.cartItems.find(
        (x) => x._id === id
      );

      if (item) {
        item.quantity = quantity;
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },



    // CLEAR CART
    clearCart: (state) => {

      state.cartItems = [];

      localStorage.removeItem("cartItems");
    },
  },
});



export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;