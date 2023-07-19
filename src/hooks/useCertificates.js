import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCertificatesQuery } from '../services/dataApi';
import {
  setCertificates,
  setLoading,
  setError,
} from '../redux/features/certificatesSlice';

const useCertificates = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useGetCertificatesQuery();

  useEffect(() => {
    dispatch(setLoading());

    if (data) {
      dispatch(setCertificates(data));
    }

    if (isError) {
      dispatch(setError(error.message));
    }
  }, [data, isLoading, isError, error, dispatch]);

  return { data, isLoading, isError, error };
};

export default useCertificates;
