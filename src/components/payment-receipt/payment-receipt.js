import './payment-receipt.scss';
import React from 'react';
import { connect } from 'react-redux';
import withF from '../HOC/withF';
import BoyImg from './boy.png';

class Payment extends React.Component{

    render(){
        const { language_text } = this.props;

        const paymentText=language_text.PAYMENT

        return(
            <React.Fragment>
                <div class="detail-data payment-title">
                    <img src={BoyImg} class="main-img"/>
                    <h4 class="site--main">Please wait...</h4>
                    <div class="payment-details">
                        <ul>
                            <li> <span class="disable-font">{paymentText.VIOLATION_NOTICE}</span>
                                <span>PB465465</span>
                            </li>
                            <li> <span class="disable-font"> Payment Amount </span>
                                <span>$12.00</span>
                            </li>
                        </ul>
                    </div>
                    <div class="payment-details">
                        <ul>
                            <li class="green-font"> <span > Payment made <strong>Test@gmail.com</strong> </span>
                                <span>$50.00</span>
                            </li>
                            <li class="yellow-font"> <span > Waiting for <strong>xxx@gmail.com</strong> </span>
                                <span>$12.00</span>
                            </li>	
                        </ul>
                        <ul>
                            <li> <span class="disable-font">test@gmail.com</span> 
                                <span>$9.50</span>
                            </li>
                            <li> <span class="disable-font"> xxx@gmail.com</span>
                                <span>$80.00</span>
                            </li>
                        </ul>
                    </div>
                        <div class="send-recipt-card">
                            <h3>Send me a reciept</h3>
                            <p>Validate the details below  based on the  parking  violation Notice.</p>
                            <div class="form-group">
                                <label for="lname">{paymentText.EMAIL}</label>
                                <input type="text" id="lname" name="lastname" placeholder="Email"/>
                            </div>
                            <div class="sub-btn">
                                <input type="button" value={paymentText.SEND_BUTTON}/>
                            </div>
                        </div>				
			    </div>
                 
                 {/* <label htmlFor="VIOLATION_NOTICE">{paymentText.VIOLATION_NOTICE}</label><br/>
                 <label htmlFor="PAYMENT_AMOUNT">{paymentText.PAYMENT_AMOUNT}</label><br/>
                 <label htmlFor="PAYMENT_MADE">{paymentText.PAYMENT_MADE}</label><br/>
                 <label htmlFor="WAITING_FOR">{paymentText.WAITING_FOR}</label><br/>
                 <label htmlFor="PAYMENT_DATE">{paymentText.PAYMENT_DATE}</label><br/>
                 <label htmlFor="REFERENCE_NO">{paymentText.REFERENCE_NO}</label><br/>
                 <label htmlFor="SEND_RECECIPT">{paymentText.SEND_RECECIPT}</label><br/>
                 <label htmlFor="EMAIL">{paymentText.EMAIL}</label><br/>
                 <input  type="text" name="EMAIL" id="EMAIL" /><br/> 
                 <input  type="text" name="EMAIL" id="EMAIL" /><br/> 
                 <input type="Button" value={paymentText.SEND_BUTTON}/> */}
            </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
     language_text: state.language.language_text,
    };
  } 

export default connect(mapStateToProps) (withF(Payment));