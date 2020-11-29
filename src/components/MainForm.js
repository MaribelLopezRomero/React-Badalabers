import React from "react";
import "../stylesheets/_mainForm.scss";
import Include from "./Include";
import '../stylesheets/_hidden.scss'
import GetAvatar from './GetAvatar';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.state = {
      isHidden: true,
    };
  }

  handleCollapsable() {
    if (this.state.isHidden === true) {
      this.setState({
        isHidden: false,
      });
    } else {
      this.setState({
        isHidden: true,
      });
    }
  }
  render() {
    return (
      <div>
        <Include
          icon='far fa-keyboard'
          title='Rellena'
          navclass='navForm'
          id='form'
          handleCollapsable={this.handleCollapsable}
          arrow={this.state.arrow}
        />
        <section className={`${this.state.isHidden === true ? 'hideCollapsable' : ''} section-form`}>
          <form onChange={this.props.inputChange} className='form' action='' method='POST'>
            <label className='form__label' htmlFor='fullName'>
              Nombre completo
            </label>
            <input
              className='form__input js-field'
              id='name'
              type='text'
              name='inputForm'
              placeholder='Ej.: Maléfica'
              required
              value={this.props.dataFromParent.name}
            />
            <label className='form__label' htmlFor='position'>
              Puesto
            </label>
            <input
              className='form__input js-field'
              id='job'
              type='text'
              name='inputForm'
              placeholder='Ej.: Bruja malvada'
              required
              value={this.props.dataFromParent.job}
            />
            <GetAvatar avatar={this.props.dataFromParent.avatar} isAvatarDefault={this.props.dataFromParent.isAvatarDefault} updateAvatar={this.props.updateAvatar} />
            <label className='form__label' htmlFor='emailAddress'>
              E-mail
            </label>
            <input
              className='form__input js-field'
              id='email'
              type='email'
              name='inputForm'
              placeholder='Ej.: malefica@gmail.com'
              required
              value={this.props.dataFromParent.email}
            />
            <label className='form__label' htmlFor='telephone'>
              Teléfono
            </label>
            <input
              className='form__input js-field'
              id='phone'
              type='tel'
              name='inputForm'
              placeholder='Ej.: 666-66-66-66'
              required
              value={this.props.dataFromParent.phone}
            />

            <label className='form__label' htmlFor='linkedin'>
              LinkedIn
            </label>
            <input
              className='form__input js-field'
              id='linkedin'
              type='text'
              name='inputForm'
              placeholder='Ej.: linkedin.com/in/malefica'
              value={this.props.dataFromParent.linkedin}
            />
            <label className='form__label' htmlFor='github'>
              GitHub
            </label>
            <input
              className='form__input js-field'
              id='github'
              type='text'
              name='inputForm'
              placeholder='Ej.: @malefica'
              value={this.props.dataFromParent.github}
            />
          </form>
        </section>
      </div>
    );
  }
}

export default MainForm;
