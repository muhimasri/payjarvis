import './card-payment.scss';
import { connect } from 'react-redux';
import { sendPayment } from '../actions/payment.action';
import React from 'react';

class CardPayment extends React.Component{

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }    

    render(){

        const { card_field, language_text, payment, history } = this.props;
        console.log('this is componenet state data by payment :->', payment)
        if(payment.loading)
            return(<h1>loading</h1>)
        return(
            <React.Fragment>
                <form className="form-details" noValidate autoComplete="off">
                    <div className="form-field">
                        <label for="CREDIT_CARD">{card_field.CREDIT_CARD}</label><br/>
                        <input type="text" onChange={this.handleChange.bind(this)} name="CREDIT_CARD" id="CREDIT_CARD" />
                        <br/>
                        <label for="EXPIRY_DATE">{card_field.EXPIRY_DATE}</label><br/>
                        <input type="text" onChange={this.handleChange.bind(this)} name="EXPIRY_DATE" id="EXPIRY_DATE" />
                        <br/>
                        <label for="CVC">{card_field.CVC}</label><br/>
                        <input type="text" onChange={this.handleChange.bind(this)} name="CVC" id="CVC" />
                        <br/>
                        <input type="Button" onClick={() => {this.props.sendPayment(this.state, history)}} value="Pay" /><br/>
                    </div>
                </form>
        </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
      payment: state.payment
    };
  }

export default connect(mapStateToProps, {sendPayment}) (CardPayment)