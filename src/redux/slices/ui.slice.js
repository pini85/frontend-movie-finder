import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  theme: 'default-theme',
  spinner: 'camera',
  headerHeight: 0,
};
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setSpinner: (state, action) => {
      state.spinner = action.payload;
    },
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    },
  },
});

export const { setTheme, setSpinner, setHeaderHeight } = uiSlice.actions;

export default uiSlice.reducer;
