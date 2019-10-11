import Footer from '../footer'
import Header from '../header'
import React from 'react';

export default function withHF(Component) {
	return function WrapperComponent(props) {
  		return (<React.Fragment><Header /><Component {...props} /><Footer /></React.Fragment>);
    };
}