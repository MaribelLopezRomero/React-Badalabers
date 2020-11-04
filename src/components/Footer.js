import React from 'react';
import logo from '../images/logo-adalab.png';
import '../stylesheets/_footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer" role="contentinfo">
        <small class="footer__small"> &copy; devilAPPers 2020 </small>
        <a href="./profileCards.html" title="Ir a crear tu tarjeta de visita">
          <img
            class="footer__logo"
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
