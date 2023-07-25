import { createSlice } from '@reduxjs/toolkit';

import { initialSocials } from '../initialState';

const socialsSlice = createSlice({
  name: 'socials',
  initialState: initialSocials,
  reducers: {},
});

export default socialsSlice.reducer;
