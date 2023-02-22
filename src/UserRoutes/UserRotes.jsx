import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() => import('../pages/MoviesSearchPage/MoviesSearchPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const SingleMoviePage = lazy(() => import('../pages/SingleMoviePage/SingleMoviePage'));
const CastPage = lazy(() => import('pages/CastPage/Castpage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading page</p>}>
      <Routes>
        <Route path={'/'} element={<HomePage />} />

        <Route path="/movies" element={<MoviesSearchPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
