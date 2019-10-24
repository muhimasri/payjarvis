import React from 'react';
import { connect } from 'react-redux';
import './checkout-form.scss';
import { sendPayment } from '../actions/payment.action';
import { CardNumberElement,
         CardExpiryElement,
         CardCVCElement,
         injectStripe} from 'react-stripe-elements';

const createOptions = () => {
  return {
    style: {
      base: {
         color: '#1B3535',
         '::placeholder': {
           color: '#dedede',
         }
      },
      invalid: {
        color: '#c23d4b',
      }
    }
  };
};

class CheckoutForm extends React.Component {
  state = {
    errorMessage: '',
  };

  handleChange = ({error}) => {
    if (error) {
      this.setState({errorMessage: error.message});
    }
  //   this.setState({
  //     [event.target.name]:event.target.value
  // });
  };

  handleSubmit = async() => {
    const { detail_data, history} = this.props;
    if (this.props.stripe) {
      let {token} = await this.props.stripe.createToken({name: "Name"});
      const updateObj = {
        token: token.id,
        amount: detail_data.response_success.total || '50',
        ticketId: detail_data.response_success.ticketId
      }
      this.props.sendPayment(updateObj,history)
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  
  render() {
    const { payment,  } = this.props;
    
    if(payment.loading)
            return(<h1>loading</h1>)
    return (
      <form className="form-data">
                    <div className="form-field">
                    {/* <label htmlFor="CREDIT_CARD">{card_field.CREDIT_CARD}</label><br/> */}
                        <div className="txt-input">
                        <CardNumberElement
                        {...createOptions()}
                        onChange={this.handleChange.bind(this)}
                        />
                        </div>
                    </div>
                    <div className="form-field">

                    {/* <label htmlFor="EXPIRY_DATE">{card_field.EXPIRY_DATE}</label><br/> */}
                        <div className="txt-input">
                        <CardExpiryElement {...createOptions()} onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-field">

                    {/* <label htmlFor="CVC">{card_field.CVC}</label><br/> */}
                        <div className="txt-input">
                        <CardCVCElement {...createOptions()} onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="error" role="alert">
                    {this.state.errorMessage}
                    </div>
                    <input type="button" value="Pay" onClick={this.handleSubmit.bind(this)} />
                </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    payment: state.payment
  };
}

export default connect(mapStateToProps, {sendPayment}) (injectStripe(CheckoutForm))