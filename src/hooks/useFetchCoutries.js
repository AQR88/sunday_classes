import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const useFetchCoutries = () => {
  const [counries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    counries,
    error,
    loading,
  };
};
