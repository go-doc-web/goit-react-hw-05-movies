import { useState, useEffect } from 'react';

import { getTrendMoviesToday } from '../../shared/servises/movie-api';
import TrendMoviesList from './TrendMoviesList/TrendMoviesList';

const TrendMovies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesToday = async () => {
      try {
        setLoading(true);
        const { results } = await getTrendMoviesToday();
        setItems([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesToday();
  }, [setItems, setLoading, setError]);
  return <TrendMoviesList items={items} />;
};

export default TrendMovies;
