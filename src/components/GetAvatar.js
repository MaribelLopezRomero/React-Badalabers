import React, {Component} from "react";
import '../stylesheets/GetAvatar.scss';
import propTypes from 'prop-types';

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();
    this.getPreview = this.getPreview.bind(this);
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click(); 
  }

  uploadImage(e){
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return (!isDefault) ? {backgroundImage: `url(${image})`} : {};
  }

  render() {
    return ( 
      <>
      <label className='form__label labelImage' htmlFor='img'>
              Imagen de perfil
            </label>
            <div className='form__wrapperImage'>
              <div className='action get-avatar'>
                <button className='action__upload-btn js__profile-trigger get-avatar__trigger' type='button' onClick={this.handleFilePicker}>
                  Añadir imagen
                </button>
                <input type='file' name='' id='avatar' ref={this.myFileField}className='action__hiddenField js__profile-upload-btn get-avatar__upload-field' required />
              </div>
              <div className='profile'>
                <div className='profile__preview js__profile-preview get-avatar__preview' style={this.getPreview(this.props.isAvatarDefault, this.props.avatar)}></div>
              </div>
        </div>
        </>
    );
  }
}

GetAvatar.propTypes = {
  updateAvatar: propTypes.func.isRequired
};

export default GetAvatar;