import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //***********Login********//
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
    loginUserFailure: (state) => {
      state.isLoading = false;
      state.error = "error";
    },
    //*********Register********//
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {},
    registerUserFailure: (state) => {},
  },
});

export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
