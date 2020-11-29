import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviewsById } from '../../services/moviesAPI';

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.movieId;

    // const { movieId: id } = this.props;

    getMovieReviewsById(id).then(data =>
      this.setState({ reviews: data.results }),
    );
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews && (
          <ul>
            {reviews.map(r => (
              <li key={r.id}>
                <h4>Author: {r.author}</h4>
                <p>{r.content}</p>
              </li>
            ))}
          </ul>
        )}

        {reviews.length === 0 && (
          <h4>Sorry, we don&apos;t have any reviews on this movie</h4>
        )}
      </>
    );
  }
}
