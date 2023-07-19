import { createSlice } from '@reduxjs/toolkit';
import { initialLanding } from '../initialState';

const landingSlice = createSlice({
  name: 'landing',
  initialState: initialLanding,
  reducers: {},
});

export default landingSlice.reducer;
