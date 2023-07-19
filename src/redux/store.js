import { configureStore } from '@reduxjs/toolkit';
import { dataApi } from '../services/dataApi';
import certificatesReducer from './features/certificatesSlice';
import contactsReducer from './features/contactsSlice';
import landingReducer from './features/landingSlice';
import linksReducer from './features/linksSlice';
import projectsReducer from './features/projectsSlice';
import socialsReducer from './features/socialsSlice';

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    certificates: certificatesReducer,
    contacts: contactsReducer,
    landing: landingReducer,
    links: linksReducer,
    projects: projectsReducer,
    socials: socialsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dataApi.middleware),
});
