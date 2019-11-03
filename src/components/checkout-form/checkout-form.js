import React from 'react';
import { connect } from 'react-redux';
import './checkout-form.scss';
import { sendPayment } from '../actions/payment.action';
import Utils from '../../services/utils';
import Apple from './apple-pay.svg';
import Gpay from './googlepay.svg';
import { CardNumberElement,
         CardExpiryElement,
         CardCVCElement,
         injectStripe} from 'react-stripe-elements';
import Loader from '../loader';
// import { updateLanguage } from "../actions/language.action";

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
    canMakePayment: false,
    showCardPayment:false
  };

  componentWillMount = () => {
    const { detail_data, history} = this.props;
    this.state.deviceType = Utils.getDeviceOperatingSystem();
    if (this.state.deviceType !== null) {
      const paymentRequest = this.props.stripe.paymentRequest({
        country: 'CA',
        currency: 'cad',
        total: {
          label: 'Total Amount',
          amount: detail_data.response_success.total
        },
        requestPayerEmail: true
      });
  
      paymentRequest.on('token', ({complete, token, ...data}) => {
        const updateObj = {
          token: token.id,
          amount: detail_data.response_success.total,
          ticketId: detail_data.response_success.ticketId
        }
        this.props.sendPayment(updateObj,history)
        // console.log('Received Stripe token: ', token);
        // console.log('Received customer information: ', data);
        // complete('success');
      });
  
      paymentRequest.canMakePayment().then((result) => {
        this.setState({canMakePayment: !!result});
      });

      this.state.paymentRequest = paymentRequest;
    } else {
      this.state.showCardPayment = true;
    }
  }

  handlePayRequestClick = () => {
    this.state.paymentRequest.show();
  }

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

  showPaymentForm = () => {
    this.setState({
        showCardPayment:!this.state.showCardPayment
    })
  }
  
  render() {
    const { payment, language_text } = this.props;
    const card_field = language_text.CONFIRM_DETAILS_COMPONENT.CARD_FIELDS;
    const payments = language_text.CONFIRM_DETAILS_COMPONENT.PAYMENTS;
		let imgText;
		if(this.state.deviceType === 'ios')
			imgText = <img src={Apple} alt="Apple"/>
		else if (this.state.deviceType === 'android')
			imgText =<img src={Gpay} alt="Gpay"/>
		else 
			imgText = 'Pay'

    return (
      <React.Fragment>
        <div className="btn-pay">
              {
                this.state.canMakePayment ? (
                  <div>
                    <a href="#" className="custom-btn btn-gray mb-15" onClick={this.handlePayRequestClick.bind(this)}>{imgText}</a>
                    <a href="#" className={this.state.showCardPayment ? "custom-btn" : "custom-btn btn-gray"} onClick={this.showPaymentForm.bind(this)}>{payments.PAY_WITH_CARD}</a>
                  </div>
                ) : null
              }
            </div>

            { this.state.showCardPayment &&
              <form className="form-data">
                <div className="form-field">
                <label htmlFor="CREDIT_CARD">{card_field.CREDIT_CARD}</label><br/>
                    <div className="txt-input">
                    <CardNumberElement
                    {...createOptions()}
                    onChange={this.handleChange.bind(this)}
                    />
                    </div>
                </div>
                <div className="form-field">

                <label htmlFor="EXPIRY_DATE">{card_field.EXPIRY_DATE}</label><br/>
                    <div className="txt-input">
                    <CardExpiryElement {...createOptions()} onChange={this.handleChange.bind(this)} />
                    </div>
                </div>
                <div className="form-field">

                <label htmlFor="CVC">{card_field.CVC}</label><br/>
                    <div className="txt-input">
                    <CardCVCElement {...createOptions()} onChange={this.handleChange.bind(this)} />
                    </div>
                </div>
                <div className="error" role="alert">
                {this.state.errorMessage}
                </div>
                <div className="btn-pay">
                  <input type="button" value="Pay" onClick={this.handleSubmit.bind(this)} />
                </div>
            </form>
          }
      {payment.loading && <Loader />}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    payment: state.payment,
    language_text: state.language.language_text,
  };
}

export default connect(mapStateToProps, {sendPayment}) (injectStripe(CheckoutForm))