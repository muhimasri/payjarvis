import './ticket-details.scss';
import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { getTicketDetails } from '../../services/ticket';

class TicketDetails extends React.Component {
    constructor(props) {
        super(props);
        getTicketDetails()
        .then(data => {});
    }
    render() {
      const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#02C4C9',
          }
        }
      });
        return (
          <ThemeProvider theme={theme}>
            <div className="ticket-details">
                <form className="form-details" noValidate autoComplete="off">
                    <div className="form-field">
                        <TextField
                            label="Violation Notice Number"
                            name="noticeNumber"
                            margin="normal"
                            variant="outlined"
                            fullWidth/>
                    </div>
                </form>
                <div className="footer">
                    <Button variant="outlined" color="primary">
                        Continue to Payment
                    </Button>
                </div>
            </div>
            </ThemeProvider>
        )
    }
}
export default TicketDetails