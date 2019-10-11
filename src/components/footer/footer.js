import './footer.scss';
import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render() {
        const { language_text } = this.props;
        return (
          <div className="footer-section">
              <p>{language_text.FOOTER_TEXT}</p>
              <ul>
                  {language_text.FOOTER_LINKS.map((o, i) => (
                      <li key={i}>{o}</li>
                  ))}
              </ul>
          </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      language_text: state.language.language_text
    };
  }
export default connect(mapStateToProps, null) (Footer)