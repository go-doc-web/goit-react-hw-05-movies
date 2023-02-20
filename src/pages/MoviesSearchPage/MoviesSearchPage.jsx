import { useState, useEffect } from 'react';
import MovieSearchForm from 'modules/MovieSearchForm/MovieSearchForm';
import { getSearchPosts } from 'shared/servises/movie-api';

import MoviesList from 'modules/TrendMovie/TrendMoviesList/MoviesList';

import css from './MoviesSearshPage.module.css';

const MoviesSearchPage = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [isBtnActive, setBtnActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeSerach = ({ search }) => {
    setSearch(search);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setBtnActive(false);
        const { results } = await getSearchPosts(search);
        // console.log(results);
        setItems(results);
        console.log(items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        setBtnActive(true);
      }
    };
    if (search) {
      fetchPosts();
    }
  }, [search, setItems]);

  return (
    <main>
      <section className={css.section_search}>
        <MovieSearchForm
          isBtnActive={isBtnActive}
          onSubmit={changeSerach}
          loading={loading}
        />
      </section>
      <section>{items.length > 0 && <MoviesList items={items} />}</section>
    </main>
  );
};

export default MoviesSearchPage;
