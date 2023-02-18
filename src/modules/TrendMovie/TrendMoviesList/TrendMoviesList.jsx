import { Link } from 'react-router-dom';

import css from './TrendMoviesList.module.css';

const TrendMoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <Link className={css.trend_link} key={id} to={`/movies/${id}`}>
      <li>{title}</li>
    </Link>
  ));

  return <ul className={css.trend_list}>{elements}</ul>;
};

export default TrendMoviesList;
