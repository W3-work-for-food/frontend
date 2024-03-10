import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAmbassador } from '@utils/types/ambassadorTypes';
import {
  fetchAmbassador,
  fetchAmbassadors,
} from '@services/redux/slices/ambassadors/ambassadorsApi';

export const getAmbassadors = createAsyncThunk(
  '@@ambassadors/getAmbassadors',
  async (
    payload: { access: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await fetchAmbassadors(payload.access);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to get ambassadors' });
    }
  }
);

export const pushAmbassador = createAction<string>(
  '@@ambassadors/pushAmbassador'
);

export const getAmbassador = createAsyncThunk(
  '@@ambassadors/getAmbassador',
  async (
    payload: { access: string; id: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await fetchAmbassador(payload.access, payload.id);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to get ambassador' });
    }
  }
);

interface IAmbassadorsState {
  ambassadors: IAmbassador[] | null;
  ambassador: IAmbassador | null;
  curAmbassador: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IAmbassadorsState = {
  ambassadors: [],
  ambassador: null,
  curAmbassador: null,
  isLoading: true,
  error: null,
}

const ambassadorsSlice = createSlice({
  name: '@@ambassadors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAmbassadors.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getAmbassadors.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          ambassadors: action.payload,
          error: '',
        };
      })
      .addCase(getAmbassadors.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          ambassadors: [],
          error: action.payload as string,
        };
      })
      .addCase(getAmbassador.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getAmbassador.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          ambassador: action.payload,
          error: null,
        };
      })
      .addCase(getAmbassador.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          ambassador: null,
          error: action.payload as string,
        };
      })
      .addCase(pushAmbassador, (state, action) => {
        return {
          ...state,
          curAmbassador: action.payload,
        };
      });
  },
});

export const ambassadorsReducer = ambassadorsSlice.reducer;
