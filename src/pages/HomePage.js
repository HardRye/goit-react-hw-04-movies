import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../components/FilmsList/FilmsList';
import { getTrending } from '../services/moviesAPI';

export default class HomePage extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    getTrending().then(data => this.setState({ movies: data.results }));
  }

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    // console.log(location);

    return (
      <div style={{ marginLeft: '20px' }}>
        <h1>Trending today</h1>

        <FilmsList movies={movies} location={location} />
      </div>
    );
  }
}
