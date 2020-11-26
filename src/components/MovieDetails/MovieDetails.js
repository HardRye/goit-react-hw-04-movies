import React from 'react';
import PropTypes from 'prop-types';

const posterPath = `https://image.tmdb.org/t/p/w300`;

const MovieDetails = ({ movie = [] }) => {
  return (
    <div style={{ display: 'flex' }}>
      <img src={`${posterPath}${movie.poster_path}`} alt="" />
      <div style={{ marginLeft: '20px' }}>
        <h2>
          {`${movie.title ? movie.title : movie.name} (${new Date(
            movie.release_date,
          ).getFullYear()})`}
        </h2>
        <p>User score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul>
          {movie.genres.map(g => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default MovieDetails;
