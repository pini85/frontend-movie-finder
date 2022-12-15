import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { uiSlice } from './slices/ui.slice';
import { userSlice } from './slices/user.slice';

const reducers = combineReducers({
  ui: uiSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
