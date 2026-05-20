import { createSlice } from "@reduxjs/toolkit";


// GET USER FROM STORAGE
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;



const initialState = {
  userInfo: userInfoFromStorage,
};



const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    // LOGIN
    setCredentials: (state, action) => {

      state.userInfo = action.payload;

      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload)
      );
    },



    // LOGOUT
    logout: (state) => {

      state.userInfo = null;

      localStorage.removeItem("userInfo");
    },
  },
});



export const {
  setCredentials,
  logout,
} = authSlice.actions;

export default authSlice.reducer;