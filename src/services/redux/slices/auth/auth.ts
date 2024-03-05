import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, getuser } from './authAPI';

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
  error: string | null;
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
      const response = await logout(payload.access);
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
  error: null,
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
          isLoading: false,
          isLoggedIn: true,
          user: action.payload,
          accessToken: action.payload.token,
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
      .addCase(logoutUser.fulfilled, (state, action) => {
        localStorage.removeItem('accessToken');
        const newState = {
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
        };
        // eslint-disable-next-line no-console
        console.log(action);
        return newState;
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
        };
      })
      .addCase(getProfileUser.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload as string,
        };
      });
  },
});

export const authReducer = authSlice.reducer;

export const selectUser = (state: { user: IAuthState }) => state.user;

export const selectLoggedIn = (state: { isLoggedIn: IAuthState }) =>
  state.isLoggedIn;

export const selectLoading = (state: { isLoading: IAuthState }) =>
  state.isLoading;

export const selectError = (state: { error: IAuthState }) => state.error;

// export const getToken = (state: { user: IAuthState }) => state.user.accessToken;
