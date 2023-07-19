import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from '../initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {},
});

export default contactsSlice.reducer;
