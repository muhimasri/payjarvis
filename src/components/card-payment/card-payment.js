import './card-payment.scss';
import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../checkout-form'

class CardPayment extends React.Component{

    render(){
        return(
            <React.Fragment>
                <StripeProvider apiKey="pk_test_gcU83HUDTZBrkPYNgmyzLrPJ00au2xqGzI">
                    <Elements>
                        <CheckoutForm {...this.props} />
                    </Elements>
                </StripeProvider>
            </React.Fragment>
        )
    }
}

export default CardPayment;