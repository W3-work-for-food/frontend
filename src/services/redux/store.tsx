import { configureStore } from '@reduxjs/toolkit';
import { merchReducer } from '@services/redux/slices/merch/merch';
import { authReducer } from './slices/auth/auth';
import { ambassadorsReducer } from './slices/ambassadors/ambassadors';

export const store = configureStore({
  reducer: {
    user: authReducer,
    ambassadors: ambassadorsReducer,
    merchs: merchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
