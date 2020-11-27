import React from 'react';
import '../stylesheets/_menu.scss';

class Include extends React.Component {
  handleCollapsable() {
    this.props.handleCollapsable();
  }
  render() {
    return (
      <div onClick={this.props.handleCollapsable}>
        <nav className={`mainMenu ${this.props.navclass}`}>
          <div className='mainMenu__iconTitle'>
            <span className='mainMenu__iconTitle--icon'>
              <i className={this.props.icon} aria-hidden='true'></i>
            </span>
            <h3 className='mainMenu__iconTitle--title'>{this.props.title}</h3>
          </div>
          <button className={`${this.props.arrow} mainMenu__button js-button`} id={this.props.id}>
            <img src='https://img.icons8.com/ios-glyphs/30/000000/jack-o-lantern.png' alt='pumpkin icon' />
          </button>
        </nav>
      </div>
    );
  }
}

export default Include;
