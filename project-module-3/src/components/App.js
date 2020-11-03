import '../stylesheets/App.scss';
import '../stylesheets/_header.scss';
import logo from '../images/logo-awesome-profile-cards.svg';
import React from 'react';

class App extends React.Component {
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

export default App;
