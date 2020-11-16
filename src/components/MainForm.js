import React from "react";
import "../stylesheets/_mainForm.scss";
import Include from "./Include";

class MainForm extends React.Component {
  render() {
    return (
      <div>
        <Include
          icon="far fa-keyboard"
          title="Rellena"
          navclass="navform"
          id="form"
        />
        <section className="hideCollapsable section-form">
          <form className="form" action="" method="POST">
            <label className="form__label" htmlFor="fullName">
              Nombre completo
            </label>
            <input
              className="form__input js-field"
              id="name"
              type="text"
              name="name"
              placeholder="Ej.: Maléfica"
              required
            />
            <label className="form__label" htmlFor="position">
              Puesto
            </label>
            <input
              className="form__input js-field"
              id="job"
              type="text"
              name="job"
              placeholder="Ej.: Bruja malvada"
              required
            />
            <label className="form__label labelImage" htmlFor="img">
              Imagen de perfil
            </label>
            <div className="form__wrapperImage">
              <div className="action">
                <button
                  className="action__upload-btn js__profile-trigger"
                  type="button"
                >
                  Añadir imagen
                </button>
                <input
                  type="file"
                  name=""
                  id="photo"
                  className="action__hiddenField js__profile-upload-btn"
                  required
                />
              </div>
              <div className="profile">
                <div className="profile__preview js__profile-preview"></div>
              </div>
            </div>
            <label className="form__label" htmlFor="emailAddress">
              E-mail
            </label>
            <input
              className="form__input js-field"
              id="email"
              type="email"
              name="email"
              placeholder="Ej.: malefica@gmail.com"
              required
            />
            <label className="form__label" htmlFor="telephone">
              Teléfono
            </label>
            <input
              className="form__input js-field"
              id="phone"
              type="tel"
              name="phone"
              placeholder="Ej.: 666-66-66-66"
              required
            />

            <label className="form__label" htmlFor="linkedin">
              LinkedIn
            </label>
            <input
              className="form__input js-field"
              id="linkedin"
              type="text"
              name="linkedin"
              placeholder="Ej.: linkedin.com/in/malefica"
            />
            <label className="form__label" htmlfor="github">
              GitHub
            </label>
            <input
              className="form__input js-field"
              id="github"
              type="text"
              name="github"
              placeholder="Ej.: @malefica"
            />
          </form>
        </section>
      </div>
    );
  }
}

export default MainForm;
