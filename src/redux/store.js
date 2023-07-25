import { configureStore } from '@reduxjs/toolkit';

import certificatesReducer from './features/certificatesSlice';
import contactsReducer from './features/contactsSlice';
import landingReducer from './features/landingSlice';
import linksReducer from './features/linksSlice';
import projectsReducer from './features/projectsSlice';
import socialsReducer from './features/socialsSlice';
import stackReducer from './features/stackSlice';

import { dataApi } from '../services/dataApi';

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    certificates: certificatesReducer,
    contacts: contactsReducer,
    landing: landingReducer,
    links: linksReducer,
    projects: projectsReducer,
    socials: socialsReducer,
    stack: stackReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dataApi.middleware),
});
