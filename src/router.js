import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app.js';
import HighRatedMovies from './Movie/Movies/highRated-movies/highRatedMovies.js';
import PopularMovies from './Movie/Movies/popular-movies/popularMovies.js';
import SearchMovies from './Movie/Movies/search-movies/searchMovies.js'

// router management
const Routes = (props) => (
  <BrowserRouter>
    {props.children}
    <Switch>
      <Route path="/" exact component={HighRatedMovies} />
      <Route path="/high-rated" exact component={HighRatedMovies} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/search/:query" component={SearchMovies} />
    </Switch>
  </BrowserRouter>
);

// router management
export default Routes;