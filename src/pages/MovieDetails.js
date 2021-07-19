import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    getMovie(id).then((response) => {
      this.setState({
        movie: response,
      }, () => this.setState({
        loading: false,
      }));
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { id } } } = this.props;
    const { deleteMovie } = movieAPI;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details" className="movie-details">
        <img alt="Movie Cover" src={ imagePath.startsWith('.') ? `.${imagePath}` : imagePath} />
        <p><strong>Title:</strong> { title }</p>
        <p><strong>Subtitle:</strong> { subtitle }</p>
        <p><strong>Storyline:</strong> { storyline }</p>
        <p><strong>Genre:</strong> { genre }</p>
        <p><strong>Rating:</strong> { rating }</p>
        <div className="links">
          <Link to="/" className="return-button">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` } className="edit-button">EDITAR</Link>
          <Link to="/" onClick={ () => deleteMovie(id) } className="delete-button">DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
