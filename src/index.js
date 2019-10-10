import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import TicketDetails from './components/ticket-details'
import App from './components/app';
import PaymentMethod from './components/payment-method';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/ticket-details" component={TicketDetails} />
        <Route path="/payment-method" component={PaymentMethod} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
