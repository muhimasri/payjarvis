import './card-payment.scss';
import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../checkout-form'

class CardPayment extends React.Component{
// pk_live_99KL1cH1wjF7Hcs8w02kygOG00zWWI4JmG
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