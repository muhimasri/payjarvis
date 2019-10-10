import React from 'react';
import ReactDOM from 'react-dom';
import PaymentMethod from './payment-method';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaymentMethod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
