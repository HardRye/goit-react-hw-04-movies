import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './FilmsList.module.css';

const posterPath = 'https://image.tmdb.org/t/p/original';

const FilmsList = ({ movies = [], location }) => {
  return (
    <ul className={styles.list}>
      {movies.map(film => {
        const posterSrc = film.poster_path
          ? `${posterPath}${film.poster_path}`
          : null;
        const filmTitle = film.title ? film.title : film.name;
        const filmDate = film.release_date
          ? film.release_date
          : film.first_air_date;
        const filmYear = new Date(filmDate).getFullYear();

        return (
          <li key={film.id} className={styles.item}>
            <Link
              to={{
                pathname: `/movies/${film.id}`,
                state: {
                  from: location,
                },
              }}
              className={styles.link}
            >
              <div className={styles.imageWrapper}>
                <img src={posterSrc} alt="" className={styles.image} />
              </div>
              <p className={styles.text}>{`${filmTitle} (${filmYear})`}</p>
            </Link>
          </li>
        );
      })}
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
