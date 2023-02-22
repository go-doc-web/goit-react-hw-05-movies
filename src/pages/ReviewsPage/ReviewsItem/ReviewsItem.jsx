import PropTypes from 'prop-types';

import css from './ReviewsItem.module.css';

const ReviewsItem = ({ items }) => {
  const elements = items.map(({ id, author, content }) => (
    <li key={id} className={css.reviews_item}>
      <p className={css.reviews_author}>Author:{author}</p>
      <p className={css.reviews_content}>{content}</p>
    </li>
  ));
  return <ul className={css.list_rewiews}>{elements}</ul>;
};

export default ReviewsItem;

ReviewsItem.defaultProps = {
  items: [],
};

ReviewsItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
