import { Link } from 'react-router-dom';

const TrendMoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <Link key={id} to={`/movies/${id}`}>
      <li>{title}</li>
    </Link>
  ));

  return <ul>{elements}</ul>;
};

export default TrendMoviesList;
