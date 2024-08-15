import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://raw.githubusercontent.com/moroz-art-dev/materials/main/',
  }),
  endpoints: builder => ({
    getCertificates: builder.query({
      query: () => 'certificates/data.json',
    }),
    getProjects: builder.query({
      query: () => 'projects/data.json',
    }),
    getStack: builder.query({
      query: () => 'stack/data_v1.json',
    }),
  }),
});

export const {
  useGetCertificatesQuery,
  useGetProjectsQuery,
  useGetStackQuery,
} = dataApi;
