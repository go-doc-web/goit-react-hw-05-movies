import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from 'modules/NavBar';
import HomePage from './pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage';
import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
