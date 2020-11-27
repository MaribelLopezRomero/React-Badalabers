import '../stylesheets/_landing.scss';
import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <main className='mainLanding' role='main'>
        <div className='mainLanding__logo'>
          <a href='./profileCards.html' title='Ir a crear tu tarjeta de visita'>
            <img
              className='mainLanding__logo--img'
              src='./assets/images/logo-awesome-profile-cards.svg'
              alt='Logo crea tu propia tarjeta de visita'
              title='Logo crea tu propia tarjeta de visita'
            />
          </a>
        </div>
        <section className='mainLanding__text'>
          <h1 className='mainLanding__text--title'>
            Crea tu tarjeta de visita
          </h1>
          <h2 className='mainLanding__text--subtitle'>
            Crea mejores contactos profesionales de forma fácil y cómoda
          </h2>
        </section>
        <section>
          <ul className='mainLanding__list'>
            <li>
              <span className='mainLanding__list--icon'>
                <i className='far fa-object-ungroup' aria-hidden='true'></i>
              </span>
              <h3 className='iconTitle'>Diseña</h3>
            </li>
            <li>
              <span className='mainLanding__list--icon'>
                <i className='far fa-keyboard' aria-hidden='true'></i>
              </span>
              <h3 className='iconTitle'>Rellena</h3>
            </li>
            <li>
              <span className='mainLanding__list--icon'>
                <i className='fas fa-share-alt' aria-hidden='true'></i>
              </span>
              <h3 className='iconTitle'>Comparte</h3>
            </li>
          </ul>
        </section>
        <Link to ='/card-generator'>
          <div className='mainLanding__link' role='link'>
            <a
              className='mainLanding__link--text'
              href='./profileCards.html'
              title='Ir a crear tu tarjeta de visita'
            >
              Comenzar
            </a>
          </div>
        </Link>
      </main>
    );
  }
}

export default Landing;
