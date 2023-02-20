import PropTypes from 'prop-types';

const Genres = ({ items }) => {
  const elements = items.map(({ id, name }, index) => (
    <li key={id}>{name}, </li>
  ));
  return <>{elements ? elements : 'all genres'}</>;
};

export default Genres;

Genres.defaultProps = {
  items: [],
};

Genres.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
