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
  console.log(data);
  return data;
};
