import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import Nav from './Nav/Nav';

const App = () => (
  <>
    <Nav />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
    </Switch>
  </>
);

export default App;

/*
  '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
  '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
  '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
  /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
  /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
*/
