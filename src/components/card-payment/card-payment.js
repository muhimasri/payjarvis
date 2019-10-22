import './card-payment.scss';
import { connect } from 'react-redux';
import { sendPayment } from '../actions/payment.action';
import Loading from '../loader'
import React from 'react';

class CardPayment extends React.Component{

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }    

    render(){

        const { card_field, payment, history } = this.props;
        return(
            <React.Fragment>
                <form className="form-data" noValidate autoComplete="off">
                    <div className="form-field">
                        <label htmlFor="CREDIT_CARD">{card_field.CREDIT_CARD}</label><br/>
                        <input type="text" onChange={this.handleChange.bind(this)} name="CREDIT_CARD" id="CREDIT_CARD" />
                        <br/>
                        <label htmlFor="EXPIRY_DATE">{card_field.EXPIRY_DATE}</label><br/>
                        <input type="text" onChange={this.handleChange.bind(this)} name="EXPIRY_DATE" id="EXPIRY_DATE" />
                        <br/>
                        <label htmlFor="CVC">{card_field.CVC}</label><br/>
                        <input type="text" onChange={this.handleChange.bind(this)} name="CVC" id="CVC" />
                        <br/>
                    </div>
                    <div className="sub-btn">
                    <input type="button" onClick={() => {this.props.sendPayment(this.state, history)}} value={card_field.PAY} />
						</div>
                </form>
                {payment.loading && <Loading/>}
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