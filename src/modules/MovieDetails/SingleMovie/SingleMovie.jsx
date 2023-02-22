import PropTypes from 'prop-types';

import Genres from '../Genres/Genres';

import css from './SingleMovie.module.css';
import defaultPoster from '../../../resurse/images/no-poster.jpg';

// import { RotatingSpinner } from 'shared/utilis/Spinner/DnaSpinner';

const baseImageUrl = 'https://image.tmdb.org/t/p/w342';
// const imagePlaceholder = 'https://via.placeholder.com/342x487 ';

const SingleMovie = ({ items, genres }) => {
  const { poster_path, title, vote_average, overview, release_date } = items;
  const year = release_date ? release_date.substr(0, 4) : '';
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        {/* {baseImageUrl + poster_path && <RotatingSpinner />} */}
        <div className={css.thumb}>
          <img
            src={poster_path ? baseImageUrl + poster_path : defaultPoster}
            alt={title}
            width={242}
            height={387}
          />
        </div>
        <div>
          <h1 className={css.title}>
            {/* {title ? title : 'No Title'} <span>({year})</span> */}
            {title}
            <span>({year})</span>
          </h1>
          <p className={css.score}>
            User Score: <span>{(vote_average * 10).toFixed(1)}%</span>
          </p>
          <div>
            <h2 className={css.overview_title}>overview</h2>
            <p className={css.overview__box}>
              {/* {overview ? overview : 'No overview'} */}
              {overview}
            </p>
          </div>
          <h3 className={css.genres}>Genres</h3>
          <ul className={css.genres_list}>
            {genres.length > 0 && <Genres items={genres} />}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
SingleMovie.defaultProps = {
  genres: [],
};

SingleMovie.propTypes = {
  items: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
  genres: PropTypes.array,
};
