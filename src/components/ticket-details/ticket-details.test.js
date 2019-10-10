import React from 'react';
import ReactDOM from 'react-dom';
import TicketDetails from './ticket-details';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicketDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
