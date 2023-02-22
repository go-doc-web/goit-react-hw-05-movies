import { useNavigate, useLocation, Link, useParams, Outlet } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import MovieDetails from '../../modules/MovieDetails/MovieDetails';

import css from './SingleMoviePage.module.css';

const menuRefs = ['cast', 'reviews'];

const SingleMoviePage = () => {
  const location = useLocation();
  const from = location.state?.from || '/movies';

  const navigate = useNavigate();
  const goBack = () => navigate(from);

  const { id } = useParams();

  const elements = menuRefs.map((item, index) => (
    <li key={index}>
      <Link state={{ from }} to={`/movies/${id}/${item}`}>
        {item}
      </Link>
    </li>
  ));

  return (
    <>
      <button onClick={goBack} className={css.btn}>
        <FaArrowLeft />
      </button>
      <MovieDetails />
      <ul>{elements}</ul>
      <Outlet />
    </>
  );
};

export default SingleMoviePage;
