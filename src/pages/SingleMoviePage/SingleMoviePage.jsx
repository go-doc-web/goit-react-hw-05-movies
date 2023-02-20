import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import MovieDetails from '../../modules/MovieDetails/MovieDetails';

import css from './SingleMoviePage.module.css';

const SingleMoviePage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <button onClick={goBack} className={css.btn}>
        <FaArrowLeft />
      </button>
      <MovieDetails />
    </>
  );
};

export default SingleMoviePage;
