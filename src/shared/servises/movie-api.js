import axios from 'axios';

const API_KEY = '424988524fcdd3be3cb6b3927eeba2ee';
// const BASE_URL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendMoviesToday = async () => {
  const { data } = await api.get(`/trending/movie/day`);

  return data;
};

export const getMoviesById = async id => {
  const { data } = await api.get(`/movie/${id}`);

  return data;
};

export const getSearchPosts = async query => {
  const { data } = await api.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data;
};

export const getCastById = async id => {
  const { data } = await api.get(`/movie/${id}/credits`);

  return data;
};

export const getReviewsById = async id => {
  const { data } = await api.get(`/movie/${id}/reviews`);
  console.log(data);
  return data;
};
