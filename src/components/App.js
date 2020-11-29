import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
import Nav from './Nav/Nav';

const Home = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import(
    '../pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

const App = () => (
  <>
    <Nav />

    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
