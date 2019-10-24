import './card-payment.scss';
import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../checkout-form'

class CardPayment extends React.Component{

    render(){
        return(
            <React.Fragment>
                <StripeProvider apiKey="pk_test_aeMP3z7uBMAdY1pv6tD7Ag26">
                        <Elements>
                            <CheckoutForm />
                        </Elements>
                    </StripeProvider>
        </React.Fragment>
        )
    }
}

export default CardPayment;