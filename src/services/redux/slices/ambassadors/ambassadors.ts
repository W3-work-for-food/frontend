import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAmbassador } from '@utils/types/ambassadorTypes';
import { fetchAmbassadors } from '@services/redux/slices/ambassadors/ambassadorsApi';
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
interface IAmbassadorsState {
  ambassadors: IAmbassador[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IAmbassadorsState = {
  ambassadors: [],
  isLoading: false,
  error: null,
};

const ambassadorsSlice = createSlice({
  name: "@@ambassadors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAmbassadors.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        }
      })
      .addCase(getAmbassadors.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          ambassadors: action.payload,
          error: ''
        }
      })
      .addCase(getAmbassadors.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          ambassadors: [],
          error: action.payload as string
        }
      })
  }
})

export const ambassadorsReducer = ambassadorsSlice.reducer;