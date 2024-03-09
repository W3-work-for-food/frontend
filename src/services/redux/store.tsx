import { configureStore } from '@reduxjs/toolkit';
import { notificationsReducer } from '@services/redux/slices/notifications/notifications';
import { authReducer } from './slices/auth/auth';
import { ambassadorsReducer } from './slices/ambassadors/ambassadors';

export const store = configureStore({
  reducer: {
    user: authReducer,
    ambassadors: ambassadorsReducer,
    notifications: notificationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
