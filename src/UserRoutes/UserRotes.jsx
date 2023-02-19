import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SingleMoviePage from '../pages/SingleMoviePage/SingleMoviePage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/goit-react-hw-05-movies'} element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<SingleMoviePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UserRoutes;
