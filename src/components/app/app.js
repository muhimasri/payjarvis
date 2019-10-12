import './app.scss';
import React from 'react'
import withHF from '../HOC/withHF'
import { connect } from 'react-redux';
import { uploadImage } from '../actions/image.action';
class App extends React.Component {
  render() {
    const { language_text, history } = this.props;
    return (
      <div className="main-app">
        <h2>{language_text.HOME_COMPONENT.TEXT}</h2>
        <p>{language_text.HOME_COMPONENT.LABEL}</p>
        <div className="upload--button">
          <h3>{language_text.HOME_COMPONENT.UPLOAD_BUTTON_TEXT}</h3>
          <p>{language_text.HOME_COMPONENT.UPLOAD_BUTTON_LABEL}</p>
          <React.Fragment><label className="upload--btn">+ <input type="file" onChange={(e) => this.props.uploadImage(e.target.files, history, URL.createObjectURL(e.target.files[0]))} /></label></React.Fragment>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    language_text: state.language.language_text
  };
}
export default connect(mapStateToProps, {uploadImage}) (withHF(App))