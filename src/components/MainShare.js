import React from 'react';
// import api from "../service/api";
import '../stylesheets/_hidden.scss';
import '../stylesheets/_mainShare.scss';
import '../stylesheets/_menu.scss';
import Include from './Include';

class MainShare extends React.Component {
  constructor(props) {
    super(props);
    // this.createCard = this.createCard.bind(this);
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.state = {
      isHidden: true,
      arrow: '',
      hiddenBorder: '',
    };
  }
  // createCard() {
  //   api(this.state);
  // }

  // createCard(event) {
  //   this.props.sendRequest(event.currentTarget);

  // }

  handleCollapsable() {
    if (this.state.isHidden === true) {
      this.setState({
        arrow: 'changeArrowOn',
        isHidden: false,
        hiddenBorder: 'hideLineShare',
      });
    } else {
      this.setState({
        arrow: 'changeArrowOff',
        isHidden: true,
        hiddenBorder: '',
      });
    }
  }
  render() {
    return (
      <div>
        <Include
          icon='fas fa-share-alt'
          title='Comparte'
          navclass={`${this.state.hiddenBorder} navShare`}
          id='share'
          arrow={this.state.arrow}
          handleCollapsable={this.handleCollapsable}
        />
        <section
          className={`${
            this.state.isHidden === true ? 'hideCollapsable' : ''
          } collapsableShare section-share`}
        >
          <button className='collapsableShare__btn' onClick={this.props.sendRequest}>
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
              rel='noreferrer'
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
