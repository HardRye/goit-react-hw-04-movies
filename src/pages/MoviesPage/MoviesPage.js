import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import FilmsList from '../../components/FilmsList/FilmsList';
import { getMovieByQuery } from '../../services/moviesAPI';

import styles from './MoviesPage.module.css';

export default class MoviesPage extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    value: '',
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const parsetQueryString = queryString.parse(location.search);

    if (location.search.length === 0) {
      return;
    }

    getMovieByQuery(parsetQueryString.query).then(data =>
      this.setState({ movies: data.results }),
    );
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  clearInput = () => {
    this.setState({ value: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { value } = this.state;
    const { history, location } = this.props;

    history.push({
      pathname: location.pathname,
      search: `query=${value}`,
    });

    getMovieByQuery(value).then(data =>
      this.setState({ movies: data.results }),
    );

    this.clearInput();
  };

  render() {
    const { value, movies } = this.state;
    const { location } = this.props;

    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.wrapper}>
            <button type="submit" className={styles.button}>
              <i className="fa fa-search" />
            </button>

            <input
              type="text"
              id="search"
              className={styles.input}
              value={value}
              onChange={this.onChange}
            />
          </div>
        </form>

        <FilmsList movies={movies} location={location} />
      </div>
    );
  }
}
