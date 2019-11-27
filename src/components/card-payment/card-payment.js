import './card-payment.scss';
import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../checkout-form'

class CardPayment extends React.Component{
    render(){
        return(
            <React.Fragment>
                <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
                    <Elements>
                        <CheckoutForm {...this.props} />
                    </Elements>
                </StripeProvider>
            </React.Fragment>
        )
    }
}

export default CardPayment;