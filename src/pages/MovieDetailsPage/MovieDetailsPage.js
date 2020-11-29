import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import MovieDetails from '../components/MovieDetails/MovieDetails';
// import NotFoundPage from '../pages/NotFoundPage';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import { getMovieById } from '../../services/moviesAPI';

import styles from './MovieDetailsPage.module.css';

const MovieDetails = lazy(() =>
  import(
    '../../components/MovieDetails/MovieDetails' /* webpackChunkName: "movie-details" */
  ),
);
// const NotFoundPage = lazy(() =>
//   import('../pages/NotFoundPage' /* webpackChunkName: "not-found-page" */),
// );

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
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.movieId;

    getMovieById(id)
      .then(data => this.setState({ movie: data }))
      .catch(error => this.setState({ error: error.response }));
  }

  handleReturnButton = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push('/');
  };

  render() {
    const { movie, error } = this.state;
    const { match, location } = this.props;
    // console.log(this.props);

    return (
      <div className={styles.container}>
        <button
          type="button"
          onClick={this.handleReturnButton}
          className={styles.returnBtn}
        >
          <i className="fa fa-arrow-left" />
          {/* &ensp;Return */}
        </button>

        {error && (
          <>
            <h2>{`Error ${error.status}`}</h2>
            <h3>{error.data.status_message}</h3>
          </>
        )}

        <Suspense fallback={<div>Loading...</div>}>
          {movie && (
            <>
              <MovieDetails movie={movie} />

              <h3>Additonal information</h3>
              <ul className={styles.list}>
                <li>
                  <NavLink
                    to={{
                      pathname: `${match.url}/cast`,
                      state: { from: location.state.from },
                    }}
                    className={styles.item}
                    activeClassName={styles.activeItem}
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
                    className={styles.item}
                    activeClassName={styles.activeItem}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>

              <Switch>
                <Route path={`${match.path}/cast`} component={Cast} />
                <Route path={`${match.path}/reviews`} component={Reviews} />
              </Switch>
            </>
          )}
        </Suspense>
      </div>
    );
  }
}
