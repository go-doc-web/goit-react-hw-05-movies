import { useNavigate } from 'react-router-dom';

import MovieDetails from '../../modules/MovieDetails/MovieDetails';

import css from './SingleMoviePage.module.css';

const SingleMoviePage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <button onClick={goBack} className={css.btn}>
        Go Back
      </button>
      <MovieDetails />
    </>
  );
};

export default SingleMoviePage;
