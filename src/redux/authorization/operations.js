import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const updateApiHeaders = () => {
  api.defaults.headers.common.Authorization = null;
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const resp = await api.post('/users/register', body);
      return resp.data;
    } catch (e) {
      alert(e.response.data.message);
      throw e;
    }
  }
);

export const resendLetter = createAsyncThunk(
  'auth/resendLetter',
  async (body, thunkAPI) => {
    try {
      const resp = await api.post('/users/verify', body);
      return resp.data;
    } catch (e) {
      alert(e.response.data.message);
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const verifyUser = createAsyncThunk(
  'auth/verify',
  async (verificationToken, thunkAPI) => {
    try {
      const resp = await api.get(`/users/verify/${verificationToken}`);
      if (!resp.ok) {
        throw new Error('Verification failed');
      }
      return resp.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const resp = await api.post('/users/login', body);
      return resp.data;
    } catch (e) {
      if (e.response && e.response.status === 401) {
        alert('Your account is not verified');
        return thunkAPI.rejectWithValue('Your account is not verified');
      } else {
        return thunkAPI.rejectWithValue(e.response.data.message);
      }
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      await api.post('/users/logout', null, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      updateApiHeaders();
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, { rejectWithValue, getState }) => {
    if (getState().auth.token === null) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      const resp = await api.get('/users/current', {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      return resp.data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
