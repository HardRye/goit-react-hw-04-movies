import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovieCastById } from '../../services/moviesAPI';
import styles from './Cast.module.css';

const posterPath = `https://image.tmdb.org/t/p/original`;

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.movieId;

    // const { movieId: id } = this.props;

    getMovieCastById(id).then(data => this.setState({ cast: data.cast }));
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        {cast && (
          <ul className={styles.list}>
            {cast.map(c => (
              <li key={c.id} className={styles.item}>
                <div className={styles.imageWrapper}>
                  <img
                    src={`${posterPath}${c.profile_path}`}
                    alt=""
                    className={styles.image}
                  />
                </div>
                <h4>{c.name}</h4>
                {c.character && <p>Character: {c.character}</p>}
              </li>
            ))}
          </ul>
        )}

        {cast.length === 0 && (
          <h4>Sorry, we don&apos;t have any data about casts for this movie</h4>
        )}
      </>
    );
  }
}
