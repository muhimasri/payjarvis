import './payment-receipt.scss';
import React from 'react';
import { connect } from 'react-redux';

class Payment extends React.Component{

    render(){
        const { language_text } = this.props;

        const paymentText=language_text.PAYMENT

        return(
            <React.Fragment>
                 <label htmlFor="VIOLATION_NOTICE">{paymentText.VIOLATION_NOTICE}</label><br/>
                 <label htmlFor="PAYMENT_AMOUNT">{paymentText.PAYMENT_AMOUNT}</label><br/>
                 <label htmlFor="PAYMENT_MADE">{paymentText.PAYMENT_MADE}</label><br/>
                 <label htmlFor="WAITING_FOR">{paymentText.WAITING_FOR}</label><br/>
                 <label htmlFor="PAYMENT_DATE">{paymentText.PAYMENT_DATE}</label><br/>
                 <label htmlFor="REFERENCE_NO">{paymentText.REFERENCE_NO}</label><br/>
                 <label htmlFor="SEND_RECECIPT">{paymentText.SEND_RECECIPT}</label><br/>
                 <label htmlFor="EMAIL">{paymentText.EMAIL}</label><br/>
                 <input  type="text" name="EMAIL" id="EMAIL" /><br/> 
                 <input  type="text" name="EMAIL" id="EMAIL" /><br/> 
                 <input type="Button" value={paymentText.SEND_BUTTON}/>
            </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
     language_text: state.language.language_text,
    };
  } 

export default connect(mapStateToProps) (Payment);