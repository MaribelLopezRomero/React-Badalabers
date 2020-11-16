import React from 'react';
import logo from '../images/logo-devilappers.svg';
import '../stylesheets/_footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
        <small className="footer__small"> &copy; devilAPPers 2020 </small>
        <a href="./profileCards.html" title="Ir a crear tu tarjeta de visita">
          <img
            className="footer__logo"
            src={logo}
            alt="Logo del grupo"
            title="Logo del grupo"
          />
        </a>
      </footer>
    );
  }
}

export default Footer;
