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
                        {!receipt.display_subscription &&
                        <div>
                            <div>
                                            <p>{popupText.TEXT1}
                                            </p>
                                        </div>
                                        <div class="model-btn">
                                            <a href="#" class="custom-btn mb-15" onClick={()=>{receipt.display_subscription = true; this.props.updateSubscribe(this.state.details.userId)}}>{popupText.BTN1}</a>
                                        </div>
                            </div>
                        }
                                        {receipt.display_subscription &&
                                        <div className="confirm-text">
                                            <h3>{popupText.TEXT2}</h3>
                                            <h5>{popupText.TEXT3}</h5>
                                        </div>
                                    }
                        </div>				
			    </div>
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