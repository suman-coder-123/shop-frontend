
import { createSlice } from "@reduxjs/toolkit";


// GET FROM STORAGE
const wishlistFromStorage = localStorage.getItem("wishlistItems")
  ? JSON.parse(localStorage.getItem("wishlistItems"))
  : [];



const initialState = {
  wishlistItems: wishlistFromStorage,
};



const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {

    // ADD TO WISHLIST
    addToWishlist: (state, action) => {

      const item = action.payload;

      const existItem = state.wishlistItems.find(
        (x) => x._id === item._id
      );

      if (!existItem) {

        state.wishlistItems.push(item);

      }

      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },



    // REMOVE FROM WISHLIST
    removeFromWishlist: (state, action) => {

      state.wishlistItems =
        state.wishlistItems.filter(
          (item) => item._id !== action.payload
        );

      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
  },
});



export const {
  addToWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;