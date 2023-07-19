import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetProjectsQuery } from '../services/dataApi';
import {
  setProjects,
  setLoading,
  setError,
} from '../redux/features/projectsSlice';

const useProjects = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useGetProjectsQuery();

  useEffect(() => {
    dispatch(setLoading());

    if (data) {
      dispatch(setProjects(data));
    }

    if (isError) {
      dispatch(setError(error.message));
    }
  }, [data, isLoading, isError, error, dispatch]);

  return { data, isLoading, isError, error };
};

export default useProjects;
