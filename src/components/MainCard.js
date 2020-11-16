import React from 'react';
import '../stylesheets/_mainCard.scss';

class MainCard extends React.Component {
  render() {
    return (
      <>
        <section className="mainCard">
          <div className="resetImage">
            <button
              className="mainCard__button js-resetBtn"
              type="reset"
              value="Reset"
            >
              <i
                className="far fa-trash-alt mainCard__button--trashBin"
                aria-hidden="true"
              ></i>
              Reset
            </button>
            <article className="mainCard__wrapper">
              <h1 className="mainCard__wrapper--name js-nameCard js-border1">
                Nombre completo
              </h1>
              <h2 className="mainCard__wrapper--position js-positionCard js-border2">
                Profesión
              </h2>
              <div className="profile">
                {/* <!-- <div className="profile__image js__profile-image">
          <img className="js-cardImg" src="" alt="" />
        </div> --> */}
                <div
                  className="profile__image js__profile-image"
                  style={{
            backgroundImage: "url("+"https://i.picasion.com/pic90/275001457e7c33cd30cbc32e7de2aabe.gif"+")"
                  }}
                ></div>
              </div>
              <nav>
                <ul className="mainCard__wrapper--list">
                  <li className="socialLink js-circle1">
                    <a
                      href="/"
                      target="_blank"
                      className="socialLink__link js-tlCard js-icon1"
                    >
                      <i className="fas fa-mobile-alt" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="socialLink js-circle2">
                    <a
                      href="/"
                      target="_blank"
                      className="socialLink__link js-emailCard js-icon2"
                    >
                      <i className="far fa-envelope" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="socialLink js-circle3">
                    <a
                      href="/"
                      target="_blank"
                      className="socialLink__link js-linkedinCard js-icon3"
                    >
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="socialLink js-circle4">
                    <a
                      href="/"
                      target="_blank"
                      className="socialLink__link js-gitHubCard js-icon4"
                    >
                      <i className="fab fa-github-alt" aria-hidden="true"></i>
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
