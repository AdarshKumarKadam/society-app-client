import { createSlice } from "@reduxjs/toolkit";

const getUserInfo = () => {
  const userInfo = localStorage.getItem("userInfo");
  return userInfo !== "undefined" ? JSON.parse(userInfo) : null;
};

const initialState = {
  userInfo: getUserInfo(),
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("userInfo", JSON.stringify(action.payload.userInfo));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
