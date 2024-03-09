import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/auth';
import { ambassadorsReducer } from './slices/ambassadors/ambassadors';
import { contentReducer } from '@services/redux/slices/content/content';

export const store = configureStore({
  reducer: {
    user: authReducer,
    ambassadors: ambassadorsReducer,
    contents: contentReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
