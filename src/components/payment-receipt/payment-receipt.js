import './payment-receipt.scss';
import React from 'react';
import { connect } from 'react-redux';
import {sendPaymentReceipt, updateDisplay, updateSubscribe} from '../actions/receipt.action';
import withF from '../HOC/withF';
import BoyImg from './boy.png';
import Loading from '../loader';
import {getTicketDetails} from '../../services/ticket';

class Payment extends React.Component{

    state={
         email:'',
         details: {}
    }

    componentWillMount = () => {
        const {match} = this.props;
        if(match.params.id) {
            this.getTicket(match.params.id);
        }
    }

    async getTicket(id) {
        this.setState({details: await getTicketDetails(id)});
    }

    render(){
        const { language_text, receipt } = this.props;
        const paymentText=language_text.PAYMENT;
        const popupText=language_text.SUBSCRIBE_POPUP;
        return(
            <React.Fragment>
                <div className="detail-data payment-title">
                    <img src={BoyImg} className="main-img" alt="Banner"/>
                    {/* <h4 className="site--main">Please wait...</h4> */}
                    <div className="payment-details">
                        <ul>
                            <li> <span className="disable-font">{paymentText.VIOLATION_NOTICE}</span>
                                <span>{this.state.details.violationNoticeNumber}</span>
                            </li>
                            <li> <span className="disable-font">{paymentText.PAYMENT_AMOUNT}</span>
                                <span>${this.state.details.paidAmount}</span>
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
                                <span>{this.state.details.paidDate}</span>
                            </li>
                            <li> <span className="disable-font">{paymentText.REFERENCE_NO}</span>
                                <span>919823489</span>
                            </li>
                        </ul>
                    </div>
                        <div className="send-recipt-card">
                        <div>
                                            <p>{popupText.TEXT1}
                                            </p>
                                        </div>
                                        <div class="model-btn">
                                            <a href="#" class="custom-btn mb-15" onClick={()=>this.props.updateSubscribe()}>{popupText.BTN1}</a>
                                            {/* <a href="#" class="custom-btn btn-gray" onClick={()=>this.props.updateDisplay(false)}>{popupText.BTN2}</a> */}
                                        </div>
                                    {/* :
                                    <React.Fragment>
                                        <div className="disable-font">
                                            <p>{popupText.TEXT2}</p>
                                            <h1>{popupText.TEXT3}</h1>
                                        </div>
                                        <div class="model-btn">
                                            <a href="#" class="custom-btn mb-15" onClick={()=>this.props.updateDisplay(false)}>{popupText.BTN3}</a>
                                        </div>
                                    </React.Fragment> */}
                            {/* <h3>{paymentText.SEND}</h3>
                            <p>{paymentText.SEND_RECECIPT}</p>
                            <div className="form-group">
                                <label htmlFor="lname">{paymentText.EMAIL}</label>
                                <input type="text" id="lname" name="lastname" placeholder="Email" onChange={(e) => { this.setState({ email : e.target.value })}}/>
                            </div>
                            <div className="sub-btn">
                                <input type="button" value={paymentText.SEND_BUTTON} onClick={()=> this.props.sendPaymentReceipt(this.state.email)}/>
                            </div> */}
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
                                            <p>{popupText.TEXT1}
                                            </p>
                                        </div>
                                        <div class="model-btn">
                                            <a href="#" class="custom-btn mb-15" onClick={()=>this.props.updateSubscribe()}>{popupText.BTN1}</a>
                                            <a href="#" class="custom-btn btn-gray" onClick={()=>this.props.updateDisplay(false)}>{popupText.BTN2}</a>
                                        </div>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <div className="disable-font">
                                            <p>{popupText.TEXT2}</p>
                                            <h1>{popupText.TEXT3}</h1>
                                        </div>
                                        <div class="model-btn">
                                            <a href="#" class="custom-btn mb-15" onClick={()=>this.props.updateDisplay(false)}>{popupText.BTN3}</a>
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