import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContent } from '@services/redux/slices/content/contentApi';
import { IContent } from '@utils/types/contentTypes';

export const getContent = createAsyncThunk(
  '@@content/getContent',
  async (
    payload: { access: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await fetchContent(payload.access);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to get content' });
    }
  }
);

interface IContentState {
  contents: IContent[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IContentState = {
  contents: [],
  isLoading: false,
  error: null,
};

const contentSlice = createSlice({
  name: '@@content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContent.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getContent.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          contents: action.payload,
          error: '',
        };
      })
      .addCase(getContent.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          contents: [],
          error: action.payload as string,
        };
      });
  },
});

export const contentReducer = contentSlice.reducer;
