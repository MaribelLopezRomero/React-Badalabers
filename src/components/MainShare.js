import React from 'react';
import '../stylesheets/_mainShare.scss';
import Include from './Include';

class MainShare extends React.Component {
  render() {
    return (
    
        <div>
          <Include 
          src='./menu.js'
          icon='fas fa-share-alt'
          title='Comparte'
          // navclass='navShare'
          id='share'
          />
          <section className='collapsableShare hideCollapsable section-share'>
            <button className='collapsableShare__btn'>
              <i className='far fa-address-card' aria-hidden='true'></i>
              Crear tarjeta
            </button>
            <div className='collapsableShare__createLink hideCollapsable'>
              <p className='collapsableShare__createLink--title'>
                La tarjeta ha sido creada:
              </p>
              <span className='collapsableShare__createLink--twitterLink'></span>
              <a
                className='collapsableShare__createLink--twitterButton'
                target='_blank'
                href='https://twitter.com/Adalab_Digital'
              >
                <i className='fab fa-twitter' aria-hidden='true'></i>
                Compartir en Twitter
              </a>
            </div>
          </section>
        </div>
 
    );
  }
}

export default MainShare;
