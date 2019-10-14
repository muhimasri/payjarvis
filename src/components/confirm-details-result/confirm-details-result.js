import './confirm-details-result.scss';
import React from 'react';
import CardPayment from '../card-payment'
import { connect } from 'react-redux';

class ConfirmDetailResult extends React.Component{ 

    state={
        showCardPayment:false
    }
    
    showPaymentForm = () => {
        this.setState({
            showCardPayment:true
        })
    }

    render(){
        const { payments,language_text } = this.props;
        const { showCardPayment } = this.state;

        const card_field=language_text.CONFIRM_DETAILS_COMPONENT.CARD_FIELDS;
        
        return(
            <React.Fragment>
                <label for="ADMINISTRATIVE_PENALTY">{payments.ADMINISTRATIVE_PENALTY}</label>
                &nbsp;&nbsp;&nbsp;AMOUNT
                <br/>
                <label for="ADDRESS_SEARCH_FEE">{payments.ADDRESS_SEARCH_FEE}</label>
                &nbsp;&nbsp;&nbsp;AMOUNT
                <br/>
                <label for="LATE_PAYMENT_FEE">{payments.LATE_PAYMENT_FEE}</label>
                &nbsp;&nbsp;&nbsp;AMOUNT
                <br/>
                <label for="SERVICE_CHARGE">{payments.SERVICE_CHARGE}</label>
                &nbsp;&nbsp;&nbsp;AMOUNT
                <br/>
                <label for="TOTAL">{payments.TOTAL}</label>
                &nbsp;&nbsp;&nbsp;AMOUNT
                <br/>
                <input type="Button" value="Pay" /><br/>
                <input type="Button" onClick={this.showPaymentForm.bind(this)} value="Pay with Card" />
                <br/>
                <input type="checkbox"/>Split Payment
                <br/>
                { showCardPayment &&
                    <CardPayment card_field={card_field} language_text={language_text}  {...this.props} />
                }
           
                
               
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
     language_text: state.language.language_text,
    };
  } 
export default connect(mapStateToProps) (ConfirmDetailResult);
