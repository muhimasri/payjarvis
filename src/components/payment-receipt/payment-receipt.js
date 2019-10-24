import './payment-receipt.scss';
import React from 'react';
import { connect } from 'react-redux';
import {sendPaymentReceipt, updateDisplay, updateSubscribe} from '../actions/receipt.action';
import withF from '../HOC/withF';
import BoyImg from './boy.png';
import Loading from '../loader';

class Payment extends React.Component{

    state={
         email:''   
    }

    render(){
        const { language_text, receipt } = this.props;
        const paymentText=language_text.PAYMENT;
        return(
            <React.Fragment>
                <div className="detail-data payment-title">
                    <img src={BoyImg} className="main-img" alt="Banner"/>
                    <h4 className="site--main">Please wait...</h4>
                    <div className="payment-details">
                        <ul>
                            <li> <span className="disable-font">{paymentText.VIOLATION_NOTICE}</span>
                                <span>PB465465</span>
                            </li>
                            <li> <span className="disable-font">{paymentText.PAYMENT_AMOUNT}</span>
                                <span>$89.50</span>
                            </li>
                        </ul>
                    </div>
                    <div className="payment-details">
                        {/* <ul>
                            <li className="green-font"> <span > Payment made <strong>Test@gmail.com</strong> </span>
                                <span>$50.00</span>
                            </li>
                            <li className="yellow-font"> <span > Waiting for <strong>xxx@gmail.com</strong> </span>
                                <span>$12.00</span>
                            </li>	
                        </ul> */}
                        <ul>
                            <li> <span className="disable-font">{paymentText.PAYMENT_DATE}</span> 
                                <span>13 September 2019</span>
                            </li>
                            <li> <span className="disable-font">{paymentText.REFERENCE_NO}</span>
                                <span>919823489</span>
                            </li>
                        </ul>
                    </div>
                        <div className="send-recipt-card">
                            <h3>Send me a reciept</h3>
                            <p>Validate the details below  based on the  parking  violation Notice.</p>
                            <div className="form-group">
                                <label htmlFor="lname">{paymentText.EMAIL}</label>
                                <input type="text" id="lname" name="lastname" placeholder="Email" onChange={(e) => { this.setState({ email : e.target.value })}}/>
                            </div>
                            <div className="sub-btn">
                                <input type="button" value={paymentText.SEND_BUTTON} onClick={()=> this.props.sendPaymentReceipt(this.state.email)}/>
                            </div>
                        </div>				
			    </div>
                {receipt.loading && <Loading />}
                {receipt.display_subscription &&
                    <div class="modal">
                        <div class="modal-dialoug">
                            <div class="modal-content">
                                <div class="modal-body">
                                    {!receipt.subscribe ?
                                    <React.Fragment>
                                        <div>
                                            <p>We are working on making your 
                                                bill payments easier, would you 
                                                like us to email you once we 
                                                expand our service?
                                            </p>
                                        </div>
                                        <div class="model-btn">
                                            <a href="#" class="custom-btn mb-15" onClick={()=>this.props.updateSubscribe()}>Yes, please</a>
                                            <a href="#" class="custom-btn btn-gray" onClick={()=>this.props.updateDisplay(false)}>No, thanks</a>
                                        </div>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <div className="disable-font">
                                            <p>Email has been sent to your mail!</p>
                                            <h1>We are working on making your bill payments easier!</h1>
                                        </div>
                                        <div class="model-btn">
                                            <a href="#" class="custom-btn mb-15" onClick={()=>this.props.updateDisplay(false)}>Ok</a>
                                        </div>
                                    </React.Fragment>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
     language_text: state.language.language_text,
     receipt: state.receipt
    };
  } 

export default connect(mapStateToProps, {sendPaymentReceipt, updateDisplay, updateSubscribe}) (withF(Payment));