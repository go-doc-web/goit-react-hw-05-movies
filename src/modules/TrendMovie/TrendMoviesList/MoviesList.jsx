import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import css from './MoviesList.module.css';

const MoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <Link className={css.trend_link} key={id} to={`/movies/${id}`}>
      <li>{title}</li>
    </Link>
  ));

  return <ul className={css.trend_list}>{elements}</ul>;
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
