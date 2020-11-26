import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const posterPath = 'https://image.tmdb.org/t/p/w154';

const FilmsList = ({ movies = [], location }) => {
  return (
    <ul>
      {movies.map(film => (
        <li key={film.id}>
          <Link
            to={{
              pathname: `/movies/${film.id}`,
              state: {
                from: location,
              },
            }}
          >
            <img src={`${posterPath}${film.poster_path}`} alt="" />
            <p>{film.title ? film.title : film.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmsList;
