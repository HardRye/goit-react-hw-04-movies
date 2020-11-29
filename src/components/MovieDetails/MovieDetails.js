import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';

const backdropPath = `https://image.tmdb.org/t/p/original`;

const MovieDetails = ({ movie = [] }) => {
  const posterSrc = movie.backdrop_path
    ? `${backdropPath}${movie.backdrop_path}`
    : null;
  const filmTitle = movie.title ? movie.title : movie.name;
  const filmDate = movie.release_date
    ? movie.release_date
    : movie.first_air_date;
  const filmYear = new Date(filmDate).getFullYear();

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {posterSrc && <img src={posterSrc} alt="" className={styles.image} />}
      </div>
      <div>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{`${filmTitle} (${filmYear})`}</h2>
          <p className={styles.score}>
            User score: {movie.vote_average}
            &ensp;
            <span className={styles.star}>
              <i className="fa fa-star-half-o" aria-hidden="true" />
            </span>
          </p>
        </div>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul className={styles.genresList}>
          {movie.genres.map(g => (
            <li key={g.id} className={styles.genresItem}>
              {g.name}
            </li>
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
