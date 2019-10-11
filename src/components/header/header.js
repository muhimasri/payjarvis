import './header.scss';
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { updateLanguage } from "../actions/language.action";

const styles = theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    select: {}
  });

class Header extends React.Component {
    render() {
        const { language, all_language, language_text, classes } = this.props;
        return (
          <div className="Header-section">
                <h1>{language_text.TEXT}</h1>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="language-simple">Language</InputLabel>
                    <Select className={classes.select} inputProps={{name: 'language', id: 'language-simple'}} value={language} onChange={(e) => this.props.updateLanguage(e.target.value)}>
                        {all_language.map((o, i) => (
                            <MenuItem key={i} value={o}>{o}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
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
export default connect(mapStateToProps, {updateLanguage}) (withStyles(styles) (Header))