import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovieCastById } from '../services/moviesAPI';

const posterPath = `https://image.tmdb.org/t/p/w92`;

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
          <ul>
            {cast.map(c => (
              <li key={c.id}>
                {c.profile_path && (
                  <img src={`${posterPath}${c.profile_path}`} alt="" />
                )}
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
