import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/auth';
import { ambassadorsReducer } from './slices/ambassadors/ambassadors';

export const store = configureStore({
  reducer: {
    user: authReducer,
    ambassadors: ambassadorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
