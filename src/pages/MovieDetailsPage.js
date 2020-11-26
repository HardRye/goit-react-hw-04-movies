import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

import { getMovieById } from '../services/moviesAPI';

const activeStyle = {
  color: 'palevioletred',
};

export default class MovieDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape(),
      }),
    }).isRequired,
  };

  state = {
    movie: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.movieId;
    getMovieById(id).then(data => this.setState({ movie: data }));
  }

  handleReturnButton = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push('/');
  };

  render() {
    const { movie } = this.state;
    const { match, location } = this.props;
    // console.log(this.props);

    return (
      <div>
        <button type="button" onClick={this.handleReturnButton}>
          <i className="fa fa-arrow-left" />
          &ensp;Return
        </button>

        <hr />

        {movie && <MovieDetails movie={movie} />}

        <hr />

        <p>Additional Information</p>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location.state.from },
              }}
              activeStyle={activeStyle}
            >
              Cast
            </NavLink>
          </li>

          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location.state.from },
              }}
              activeStyle={activeStyle}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}
