import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
          <Link to="/" className="title"><h1>Movie Card Library</h1></Link>
          <Link to="/movies/new" className="add-button">ADICIONAR CARTÃO</Link>
      </header>
    );
  }
}

export default Header;
