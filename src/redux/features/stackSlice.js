import { createSlice } from '@reduxjs/toolkit';

const stackSlice = createSlice({
  name: 'stack',
  initialState: {
    data: {},
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    setStack: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.error = null;
    },
    setLoading: state => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { setStack, setLoading, setError } = stackSlice.actions;

export default stackSlice.reducer;
