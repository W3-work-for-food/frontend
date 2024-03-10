import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMerch } from '@utils/types/merchTypes';
import {
  fetchMerch,
  fetchMerchBudget,
  sendMerch,
} from '@services/redux/slices/merch/merchApi';

export const getMerch = createAsyncThunk(
  '@@merch/getMerch',
  async (
    payload: { access: string; id: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await fetchMerch(payload.access, payload.id);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to get merch' });
    }
  }
);

export const postMerch = createAsyncThunk(
  '@@merch/postMerch',
  async (
    payload: { access: string; id: string; body: IMerch },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await sendMerch(
        payload.access,
        payload.body,
        payload.id
      );
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to send merch' });
    }
  }
);

export const pushMerch = createAction<string>('@@merch/pushMerch');

export const getMerchBudget = createAsyncThunk(
  '@@merch/getMerchBudget',
  async (
    payload: { access: string; id: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await fetchMerchBudget(payload.access, payload.id);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to get merch budget' });
    }
  }
);

interface IMerchsState {
  merch: IMerch | null;
  curMerch: string | null;
  budget: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: IMerchsState = {
  merch: null,
  curMerch: null,
  budget: 0,
  isLoading: false,
  error: null,
};

const merchSlice = createSlice({
  name: '@@merch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMerch.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getMerch.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          merch: action.payload,
          error: '',
        };
      })
      .addCase(getMerch.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          merch: null,
          error: action.payload as string,
        };
      })
      .addCase(getMerchBudget.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getMerchBudget.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          budget: action.payload.budget as number,
          error: null,
        };
      })
      .addCase(getMerchBudget.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          budget: 0,
          error: action.payload as string,
        };
      })
      .addCase(pushMerch, (state, action) => {
        return {
          ...state,
          curMerch: action.payload,
        };
      })
      .addCase(postMerch.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(postMerch.fulfilled, (state) => {
        return {
          ...state,
          isLoading: false,
          error: null,
        };
      })
      .addCase(postMerch.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload as string,
        };
      });
  },
});

export const merchReducer = merchSlice.reducer;
