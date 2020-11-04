import '../stylesheets/_header.scss';
import React from 'react';
import logo from '../images/logo-awesome-profile-cards.svg';

class Header extends React.Component {
  render() {
    return (
      <>
        <header class="header" role="banner">
          <div>
            <a href="./index.html">
              <img
                className="header__image"
                src={logo}
                alt="Logo crea tu propia tarjeta de visita"
                title="Vuelve a la página de bienvenida"
              />
            </a>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
