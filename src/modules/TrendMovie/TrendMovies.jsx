import { useState, useEffect } from 'react';

import { getTrendMoviesToday } from '../../shared/servises/movie-api';
import MoviesList from './TrendMoviesList/MoviesList';

import { Spinner } from 'shared/utilis/Spinner/DnaSpinner';

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
  return (
    <>
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      {items.length > 0 && <MoviesList items={items} />}
    </>
  );
};

export default TrendMovies;
