import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getReviewsById } from '../../shared/servises/movie-api';
import ReviewsItem from './ReviewsItem/ReviewsItem';
// import ReviewsItem from './CastItem/CastItem';

// import css from './CastPage.module.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const { results } = await getReviewsById(id);

        setReviews([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [id, setError, setLoading, setReviews]);

  return (
    <section>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {!reviews.length > 0 && <p>No reviews</p>}
      <ReviewsItem items={reviews} />
    </section>
  );
};

export default ReviewsPage;
