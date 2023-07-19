import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: {},
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    setProjects: (state, action) => {
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

export const { setProjects, setLoading, setError } = projectsSlice.actions;

export default projectsSlice.reducer;
