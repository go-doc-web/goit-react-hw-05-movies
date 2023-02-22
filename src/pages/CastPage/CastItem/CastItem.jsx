import PropTypes from 'prop-types';

import css from './CastItems.module.css';
import defaultCastImg from '../../../resurse/images/no-poster-cast.jpg';

const baseImageUrl = 'https://image.tmdb.org/t/p/w342';

const CastItem = ({ items }) => {
  const elements = items.map(({ id, name, character, profile_path }) => (
    <li key={id} className={css.cast_item}>
      <img
        className={css.item_img}
        src={profile_path ? baseImageUrl + profile_path : defaultCastImg}
        alt={name}
        widtch={200}
        height={150}
      />
      <p className={css.item_name}>{name}</p>
      <p className={css.item_character}>Character: {character}</p>
    </li>
  ));
  return <ul className={css.cast_list}>{elements}</ul>;
};

export default CastItem;

CastItem.defaultProps = {
  items: [],
};

CastItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
