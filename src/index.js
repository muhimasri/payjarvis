import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import TicketDetails from './components/ticket-details'
import App from './components/app';
import PaymentMethod from './components/payment-method';
import TicketUpload from './components/ticket-upload';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
//THIS IS REDUX IMPORT
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import jarvisApp from './reducers';
const store = createStore(jarvisApp);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02C4C9',
    }
  }
});

const routing = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/ticket-details" component={TicketDetails} />
          <Route path="/payment-method" component={PaymentMethod} />
          <Route path="/ticket-upload" component={TicketUpload} />
        </div>
      </Router>
    </ThemeProvider>
  </Provider>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
