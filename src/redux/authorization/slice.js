import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from './operations';

const initialState = {
  token: null,
  user: null,
  isLoggedIn: false,
  verificationEmailSent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.verificationEmailSent = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.verificationEmailSent = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.verificationEmailSent = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.verificationEmailSent = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.verificationEmailSent = false;
      });
  },
});

export const authReducer = authSlice.reducer;
