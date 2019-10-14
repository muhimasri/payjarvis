import './payment-receipt.scss';
import React from 'react';
import { connect } from 'react-redux';

class Payment extends React.Component{

    render(){
        const { language_text } = this.props;

        const paymentText=language_text.PAYMENT

        return(
            <React.Fragment>
                 <label for="VIOLATION_NOTICE">{paymentText.VIOLATION_NOTICE}</label><br/>
                 <label for="PAYMENT_AMOUNT">{paymentText.PAYMENT_AMOUNT}</label><br/>
                 <label for="PAYMENT_MADE">{paymentText.PAYMENT_MADE}</label><br/>
                 <label for="WAITING_FOR">{paymentText.WAITING_FOR}</label><br/>
                 <label for="PAYMENT_DATE">{paymentText.PAYMENT_DATE}</label><br/>
                 <label for="REFERENCE_NO">{paymentText.REFERENCE_NO}</label><br/>
                 <label for="SEND_RECECIPT">{paymentText.SEND_RECECIPT}</label><br/>
                 <label for="EMAIL">{paymentText.EMAIL}</label><br/>
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