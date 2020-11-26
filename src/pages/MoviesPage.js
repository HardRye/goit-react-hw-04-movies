import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import FilmsList from '../components/FilmsList/FilmsList';
import { getMovieByQuery } from '../services/moviesAPI';

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
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              value={value}
              onChange={this.onChange}
            />
          </label>

          <button type="submit">Search</button>
        </form>

        <FilmsList movies={movies} location={location} />
      </>
    );
  }
}
