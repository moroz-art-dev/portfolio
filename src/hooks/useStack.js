import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setError, setLoading, setStack } from '../redux/features/stackSlice';
import { useGetStackQuery } from '../services/dataApi';

const useStack = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useGetStackQuery();

  useEffect(() => {
    dispatch(setLoading());

    if (data) {
      dispatch(setStack(data));
    }

    if (isError) {
      dispatch(setError(error.message));
    }
  }, [data, isLoading, isError, error, dispatch]);

  return { data, isLoading, isError, error };
};

export default useStack;
