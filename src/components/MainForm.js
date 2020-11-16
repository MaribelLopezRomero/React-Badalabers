import React from "react";
import "../stylesheets/_mainForm.scss";
import Include from "./Include";
import MainCard from "./MainCard";

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo:
        "url(" +
        "https://i.picasion.com/pic90/275001457e7c33cd30cbc32e7de2aabe.gif" +
        ")",
    };
  }
  handleChange(event) {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
    console.log(event.target.value);
    console.log(this.state.name);
    console.log(event.target.id);
  }
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
          <form
            className="form"
            onChange={this.handleChange}
            action=""
            method="POST"
          >
            <label className="form__label" htmlFor="fullName">
              Nombre completo
            </label>
            <input
              className="form__input js-field"
              id="name"
              type="text"
              name="inputForm"
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
              name="inputForm"
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
              name="inputForm"
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
              name="inputForm"
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
              name="inputForm"
              placeholder="Ej.: linkedin.com/in/malefica"
            />
            <label className="form__label" htmlfor="github">
              GitHub
            </label>
            <input
              className="form__input js-field"
              id="github"
              type="text"
              name="inputForm"
              placeholder="Ej.: @malefica"
            />
          </form>
        </section>
      </div>
    );
  }
}

export default MainForm;
