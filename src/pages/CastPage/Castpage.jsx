import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getCastById } from '../../shared/servises/movie-api';
import CastItem from './CastItem/CastItem';

import css from './CastPage.module.css';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const { cast } = await getCastById(id);

        setCast([...cast]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [id, setError, setLoading, setCast]);

  return (
    <section className={css.cast}>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <CastItem items={cast} />
    </section>
  );
};

export default CastPage;
