import Footer from '../footer'
import React from 'react';

export default function withHF(Component) {
	return function WrapperComponent(props) {
  		return (<React.Fragment><Component {...props} /><Footer /></React.Fragment>);
    };
}