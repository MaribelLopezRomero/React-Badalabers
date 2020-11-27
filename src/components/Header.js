import '../stylesheets/_header.scss';
import React from 'react';
import logo from '../images/logo-awesome-profile-cards.svg';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
    
        <header className="header" role="banner">
         <Link to = "/">
          <div>
              <img
                className="header__image"
                src={logo}
                alt="Logo crea tu propia tarjeta de visita"
                title="Vuelve a la página de bienvenida"
              />

          </div>
          </Link>
        </header>
     
    );
  }
}

export default Header;
