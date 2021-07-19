import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/project-movie-card-library-crud">
        <Header />
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id/edit"
          render={ (routeProps) => <EditMovie { ...routeProps } /> }
        />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/" exact component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
