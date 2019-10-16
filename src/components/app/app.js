import './app.scss';
import React from 'react'
import withF from '../HOC/withF'
import { connect } from 'react-redux';
import { uploadImage } from '../actions/image.action';
import { uploadTicket } from '../actions/image.action';
import { updateLanguage } from "../actions/language.action";
import headerImg from './mobile.png';
import plusImg from './plus.svg'
import { stat } from 'fs';
import Loading from '../loader';

class App extends React.Component {
  triggerInputFile = () => this.fileInput.click()
  render() {
    const { language_text, history, language, all_language,image } = this.props;
    return (
      <div className="Header-section">
        <select className="upload-dropdown" value={language} onChange={(e) => this.props.updateLanguage(e.target.value)}>
            {all_language.map((o, i) => (
                <option key={i} value={o}>{o}</option>
            ))}
        </select>
        <img src={headerImg} className="main-img"/>
        <div className="Header-content">
          <h2>{language_text.TEXT1} <br /> <strong>{language_text.TEXT2}</strong></h2>
          <h4>{language_text.HOME_COMPONENT.TEXT}</h4>
          <p>{language_text.HOME_COMPONENT.LABEL}</p>
        </div>
        
        <div className="upload--button">
          <h3>{language_text.HOME_COMPONENT.UPLOAD_BUTTON_TEXT}</h3>
          <p>{language_text.HOME_COMPONENT.UPLOAD_BUTTON_LABEL}</p>
          <React.Fragment>
            {/* <label className="upload--btn">+ 
            <input type="file" onChange={(e) => this.props.uploadImage(e.target.files, history, URL.createObjectURL(e.target.files[0]))} />
            </label> */}

            <label for="image"> 
            <img className="btn-cursor" src={plusImg} onClick={this.triggerInputFile} />
            {/* <input type="file" ref={fileInput => this.fileInput = fileInput} name="image" onChange={(e) => this.props.uploadImage(e.target.files, history, URL.createObjectURL(e.target.files[0]))} /> */}
            <input type="file" ref={fileInput => this.fileInput = fileInput} name="image" onChange={(e) => this.props.uploadTicket(e.target.files, history)} />  
            </label>
            </React.Fragment>
        </div>
        {image.loading && <Loading/>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      language: state.language.language,
      all_language: state.language.all_language,
      language_text: state.language.language_text,
      image: state.image
  };
}
export default connect(mapStateToProps, {uploadTicket, updateLanguage}) (withF(App))