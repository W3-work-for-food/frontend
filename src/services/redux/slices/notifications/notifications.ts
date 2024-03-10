import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUnviewedNotifications } from '@services/redux/slices/notifications/notificationsApi';
import { INotification } from '@utils/types/notificationTypes';

export const getUnviewedNotifications = createAsyncThunk(
  '@@notifications/getNotifications',
  async (
    payload: { access: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await fetchUnviewedNotifications(payload.access);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue({ error: 'Failed to get notifications' });
    }
  }
);

interface INotificationsState {
  notifications: INotification[];
  notification: INotification | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: INotificationsState = {
  notifications: [],
  notification: null,
  isLoading: false,
  error: null,
};

const notificationsSlice = createSlice({
  name: '@@notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUnviewedNotifications.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getUnviewedNotifications.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          notifications: action.payload,
          error: '',
        };
      })
      .addCase(getUnviewedNotifications.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          notifications: [],
          error: action.payload as string,
        };
      });
  },
});

export const notificationsReducer = notificationsSlice.reducer;
