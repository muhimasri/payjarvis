import './app.scss';
import React from 'react'
import withF from '../HOC/withF'
import { connect } from 'react-redux';
import { uploadImage } from '../actions/image.action';
import { updateLanguage } from "../actions/language.action";
import headerImg from './mobile.png';
class App extends React.Component {
  render() {
    const { language_text, history, language, all_language } = this.props;
    return (
      <div className="Header-section">
        <select className="upload-dropdown" value={language} onChange={(e) => this.props.updateLanguage(e.target.value)}>
            {all_language.map((o, i) => (
                <option key={i} value={o}>{o}</option>
            ))}
        </select>
        <img src={headerImg} className="main-img"/>
        <div class="Header-content">
          <h2>{language_text.TEXT1} <br /> <strong>{language_text.TEXT2}</strong></h2>
          <h4>{language_text.HOME_COMPONENT.TEXT}</h4>
          <p>{language_text.HOME_COMPONENT.LABEL}</p>
        </div>
        
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
      language: state.language.language,
      all_language: state.language.all_language,
      language_text: state.language.language_text
  };
}
export default connect(mapStateToProps, {uploadImage, updateLanguage}) (withF(App))