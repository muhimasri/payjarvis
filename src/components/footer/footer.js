import './footer.scss';
import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render() {
        const { language_text } = this.props;
        return (
          <div className="cantainer-footer">
              <p>{language_text.FOOTER_TEXT}</p>
              <div className="condition-link">
                  {language_text.FOOTER_LINKS.map((o, i) => (
                      <a href={o.link} key={i} target="_blank">{o.text}</a>
                  ))}
              </div>
              <ul>
                  
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