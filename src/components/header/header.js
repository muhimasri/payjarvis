import './header.scss';
import React from 'react';
import { connect } from 'react-redux';
import { updateLanguage } from "../actions/language.action";

class Header extends React.Component {
    render() {
        const { language, all_language, language_text, classes } = this.props;
        return (
          <div className="Header-section">
                <h1>{language_text.TEXT}</h1>
                    <select value={language} onChange={(e) => this.props.updateLanguage(e.target.value)}>
                        {all_language.map((o, i) => (
                            <option key={i} value={o}>{o}</option>
                        ))}
                    </select>
          </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      language: state.language.language,
      all_language: state.language.all_language,
      language_text: state.language.language_text
    };
  }
export default connect(mapStateToProps, {updateLanguage}) (Header)