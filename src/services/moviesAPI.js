import axios from 'axios';

const API_KEY = '9675092798f3a490a8c4d8f2cf77169b';
// axios.defaults.baseURL = 'https://developers.themoviedb.org/3';

export const getTrending = () =>
  axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}
  `,
    )
    .then(res => res.data);

export const getMovieById = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}
  `,
    )
    .then(res => res.data);

export const getMovieCastById = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}
  `,
    )
    .then(res => res.data);

export const getMovieReviewsById = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}
  `,
    )
    .then(res => res.data);

export const getMovieByQuery = query =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}
  `,
    )
    .then(res => res.data);
