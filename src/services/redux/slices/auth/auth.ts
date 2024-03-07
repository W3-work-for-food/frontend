import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getuser, login, logout } from './authAPI';

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

interface IAuthState {
  user: IUser;
  accessToken: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  error: string;
}

export const loginUser = createAsyncThunk(
  '@@auth/login',
  async (
    payload: { email: string; password: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await login(payload.email, payload.password);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to login' }); // Возвращаем объект с ошибкой
    }
  }
);

export const logoutUser = createAsyncThunk(
  '@@auth/logout',
  async (
    payload: { access: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const [response] = await Promise.all([logout(payload.access)]);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to logout' }); // Возвращаем объект с ошибкой
    }
  }
);

export const getProfileUser = createAsyncThunk(
  '@@auth/getUser',
  async (
    payload: { access: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await getuser(payload.access);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to get user' }); // Возвращаем объект с ошибкой
    }
  }
);

const initialState: IAuthState = {
  user: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
  } as IUser,
  accessToken: '',
  isLoading: true,
  isLoggedIn: false,
  error: '',
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isLoggedIn: false,
        };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const newState = {
          ...state,
          user: action.payload,
          isLoading: false,
          isLoggedIn: true,
          accessToken: action.payload.token,
          error: '',
        };
        localStorage.setItem('accessToken', action.payload.token);
        return newState;
      })
      .addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          error: action.error.message as string,
        };
      })
      .addCase(logoutUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isLoggedIn: false,
        };
      })
      .addCase(logoutUser.fulfilled, (state) => {
        localStorage.removeItem('accessToken');
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          user: {
            id: 0,
            email: '',
            first_name: '',
            last_name: '',
          },
          accessToken: '',
          error: '',
        };
      })
      .addCase(logoutUser.rejected, (state, action) => {
        localStorage.removeItem('accessToken');
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          error: action.error.message as string,
        };
      })
      .addCase(getProfileUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getProfileUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          user: action.payload[0],
          error: '',
        };
      })
      .addCase(getProfileUser.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          user: {
            id: 0,
            email: '',
            first_name: '',
            last_name: '',
          },
          error: action.payload as string,
        };
      });
  },
});

export const authReducer = authSlice.reducer;
export const selectError = (state: { user: IAuthState }) => state.user.error;
