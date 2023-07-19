import { createSlice } from '@reduxjs/toolkit';
import { initialLinks } from '../initialState';

const linksSlice = createSlice({
  name: 'links',
  initialState: initialLinks,
  reducers: {},
});

export default linksSlice.reducer;
