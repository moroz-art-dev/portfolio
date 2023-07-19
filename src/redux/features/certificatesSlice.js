import { createSlice } from '@reduxjs/toolkit';

const certificatesSlice = createSlice({
  name: 'certificates',
  initialState: {
    data: {},
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    setCertificates: (state, action) => {
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

export const { setCertificates, setLoading, setError } =
  certificatesSlice.actions;

export default certificatesSlice.reducer;
