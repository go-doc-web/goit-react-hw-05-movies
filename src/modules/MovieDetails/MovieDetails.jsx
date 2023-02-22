import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Spinner } from 'shared/utilis/Spinner/DnaSpinner';
import SingleMovie from './SingleMovie/SingleMovie';

import { getMoviesById } from '../../shared/servises/movie-api';
import isEmptyObject from '../../shared/utilis/isEmptyObject';

import css from './MovieDetalis.module.css';

const MovieDetails = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesToday = async () => {
      try {
        setLoading(true);
        const results = await getMoviesById(id);
        setItems(prevItems => ({ ...prevItems, ...results }));
        setGenres([...results.genres]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesToday();
  }, [setItems, setLoading, setError, setGenres, id]);

  return (
    <>
      {loading && (
        <div className={css.wrapper}>
          <Spinner />
        </div>
      )}
      {error && <p>{error.message}</p>}
      {!isEmptyObject(items) && <SingleMovie items={items} genres={genres} />}
    </>
  );
};

export default MovieDetails;
