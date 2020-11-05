import React from 'react';
import '../stylesheets/_mainForm.scss';

class MainForm extends React.Component {
  render() {
    return (
      <>
    <div>
  <include
    src="./menu.html"
    icon="far fa-keyboard"
    title="Rellena"
    navclass="navhtmlform"
    id="htmlform"
  >
  </include>
  <section className="hideCollapsable section-htmlform">
    <htmlform className="htmlform" action="" method="POST">
      <label className="htmlform__label" htmlfor="fullName">Nombre completo</label>
      <input
        className="htmlform__input js-field"
        id="name"
        type="text"
        name="name"
        placeholder="Ej.: Maléfica"
        required
      />
      <label className="htmlform__label" htmlfor="position">Puesto</label>
      <input
        className="htmlform__input js-field"
        id="job"
        type="text"
        name="job"
        placeholder="Ej.: Bruja malvada"
        required
      />
      <label className="htmlform__label labelImage" htmlfor="img">Imagen de perfil</label>
      <div className="htmlform__wrapperImage">
        <div className="action">
          <button className="action__upload-btn js__profile-trigger" type="button">
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
      <label className="htmlform__label" htmlfor="emailAddress">E-mail</label>
      <input
        className="htmlform__input js-field"
        id="email"
        type="email"
        name="email"
        placeholder="Ej.: malefica@gmail.com"
        required
      />
      <label className="htmlform__label" htmlfor="telephone">Teléfono</label>
      <input
        className="htmlform__input js-field"
        id="phone"
        type="tel"
        name="phone"
        placeholder="Ej.: 666-66-66-66"
        required
      />

      <label className="htmlform__label" htmlfor="linkedin">LinkedIn</label>
      <input
        className="htmlform__input js-field"
        id="linkedin"
        type="text"
        name="linkedin"
        placeholder="Ej.: linkedin.com/in/malefica"
      />
      <label className="htmlform__label" htmlfor="github">GitHub</label>
      <input
        className="htmlform__input js-field"
        id="github"
        type="text"
        name="github"
        placeholder="Ej.: @malefica"
      />
    </htmlform>
  </section>
</div>

      </>
    );
  }
}

export default MainForm;
