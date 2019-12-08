import './app.scss';
import React from 'react';
import { connect } from 'react-redux';
import withF from '../HOC/withF';
import { uploadTicket } from '../actions/image.action';
import { updateLanguage } from '../actions/language.action';
import headerImg from './mobile.png';
import plusImg from './plus.svg';
import Loading from '../loader';

class App extends React.Component {
  triggerInputFile = () => this.fileInput.click();

  render() {
    const {
      language_text,
      history,
      language,
      all_language,
      image,
    } = this.props;
    return (
      <div className="Header-section container-inner">
        {/* <select className="upload-dropdown" value={language} onChange={(e) => this.props.updateLanguage(e.target.value)}>
            {all_language.map((o, i) => (
                <option key={i} value={o}>{o}</option>
            ))}
        </select> */}
        <img src={headerImg} className="main-img" />
        <div className="Header-content">
          <div className="text-1">{language_text.TEXT1}</div>
          <div className="text-2">{language_text.TEXT2}</div>
          <div className="text-3">{language_text.HOME_COMPONENT.TEXT}</div>
          <p>{language_text.HOME_COMPONENT.LABEL}</p>
        </div>

        <div className="upload--button" onClick={this.triggerInputFile}>
          <div className="upload-text">
            {language_text.HOME_COMPONENT.UPLOAD_BUTTON_TEXT}
          </div>
          <p>{language_text.HOME_COMPONENT.UPLOAD_BUTTON_LABEL}</p>
          <React.Fragment>
            {/* <label className="upload--btn">+ 
            <input type="file" onChange={(e) => this.props.uploadImage(e.target.files, history, URL.createObjectURL(e.target.files[0]))} />
            </label> */}

            <label htmlFor="image">
              <img className="btn-cursor" src={plusImg} />
              {/* <input type="file" ref={fileInput => this.fileInput = fileInput} name="image" onChange={(e) => this.props.uploadImage(e.target.files, history, URL.createObjectURL(e.target.files[0]))} /> */}
              <input
                type="file"
                ref={fileInput => (this.fileInput = fileInput)}
                name="image"
                onChange={e => this.props.uploadTicket(e.target.files, history)}
              />
            </label>
          </React.Fragment>
        </div>
        {image.loading && <Loading />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    language: state.language.language,
    all_language: state.language.all_language,
    language_text: state.language.language_text,
    image: state.image,
  };
}
export default connect(mapStateToProps, { uploadTicket, updateLanguage })(
  withF(App)
);
