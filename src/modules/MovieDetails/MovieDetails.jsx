import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Genres from './Genres/Genres';

import { getMoviesById } from '../../shared/servises/movie-api';

import css from './MovieDetalis.module.css';

const baseImageUrl = 'https://image.tmdb.org/t/p/w342';
const imagePlaceholder = 'https://via.placeholder.com/342x487 ';

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
        setItems({ ...results });
        setGenres([...results.genres]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesToday();
  }, [setItems, setLoading, setError, setGenres, id]);

  const { poster_path, title, vote_average, overview, release_date } = items;
  const year = release_date ? release_date.substr(0, 4) : '';

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <section className={css.section}>
        <div className={css.wrapper}>
          <div className={css.thumb}>
            <img
              src={poster_path ? baseImageUrl + poster_path : imagePlaceholder}
              alt={title}
              width={342}
              height={487}
            />
          </div>
          <div>
            <h1 className={css.title}>
              {title ? title : 'No Title'} <span>({year})</span>
            </h1>
            <p className={css.score}>
              User Score: <span>{(vote_average * 10).toFixed(1)}%</span>
            </p>
            <div>
              <h2 className={css.overview_title}>overview</h2>
              <p className={css.overview__box}>
                {overview ? overview : 'No overview'}
              </p>
            </div>
            <h3 className={css.genres}>Genres</h3>
            <ul className={css.genres_list}>
              <Genres items={genres} />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
