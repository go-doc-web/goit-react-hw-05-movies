import TrendMovies from 'modules/TrendMovie/TrendMovies';

import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h2 className={css.title_page}>Trending Today</h2>
      <TrendMovies />
    </>
  );
};

export default HomePage;
