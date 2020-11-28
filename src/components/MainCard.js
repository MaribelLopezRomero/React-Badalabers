import React from 'react';
import '../stylesheets/_mainCard.scss';
import '../stylesheets/_colorOptions.scss';
import '../stylesheets/Profile.scss';

class MainCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <section className='mainCard'>
          <div className='resetImage'>
            <button className='mainCard__button js-resetBtn' type='reset' value='Reset' onClick={this.props.handleReset}>
              <i className='far fa-trash-alt mainCard__button--trashBin' aria-hidden='true'></i>
              Reset
            </button>
            <article className='mainCard__wrapper'>
              <h1
                className={`mainCard__wrapper--name js-nameCard js-border1 palette${this.props.dataFromParent.palette}_border palette${this.props.dataFromParent.palette}_name`}
              >
                {this.props.dataFromParent.name || 'Nombre Apellido'}
              </h1>
              <h2 className={`mainCard__wrapper--position js-positionCard js-border2 palette${this.props.dataFromParent.palette}_border`}>
                {this.props.dataFromParent.job || 'Front-end developer'}
              </h2>
              <div className='profile'>
                <img className='profile__avatar' src={this.props.dataFromParent.avatar}></img>
              </div>
              <nav>
                <ul className='mainCard__wrapper--list'>
                  <li className={`socialLink js-circle1 palette${this.props.dataFromParent.palette}_circle`}>
                    <a
                      href={'tel:' + this.props.dataFromParent.phone}
                      target='_blank'
                      rel='noreferrer'
                      className={`socialLink__link js-tlCard js-icon1 palette${this.props.dataFromParent.palette}_icon`}
                    >
                      <i className='fas fa-mobile-alt' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li className={`socialLink js-circle2 palette${this.props.dataFromParent.palette}_circle`}>
                    <a
                      href={'mailto:' + this.props.dataFromParent.email}
                      target='_blank'
                      rel='noreferrer'
                      className={`socialLink__link js-tlCard js-icon2 palette${this.props.dataFromParent.palette}_icon`}
                    >
                      <i className='far fa-envelope' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li className={`socialLink js-circle3 palette${this.props.dataFromParent.palette}_circle`}>
                    <a
                      href={'https://www.linkedin.com/in/' + this.props.dataFromParent.linkedin}
                      target='_blank'
                      rel='noreferrer'
                      className={`socialLink__link js-tlCard js-icon3 palette${this.props.dataFromParent.palette}_icon`}
                    >
                      <i className='fab fa-linkedin-in' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li className={`socialLink js-circle4 palette${this.props.dataFromParent.palette}_circle`}>
                    <a
                      href={'https://www.github.com/' + this.props.dataFromParent.github}
                      target='_blank'
                      rel='noreferrer'
                      className={`socialLink__link js-tlCard js-icon2 palette${this.props.dataFromParent.palette}_icon`}
                    >
                      <i className='fab fa-github-alt' aria-hidden='true'></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default MainCard;
