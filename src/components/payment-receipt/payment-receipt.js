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
        const details = await getTicketDetails(id);
        details.processingFeeFixed = details.processingFee.toFixed(2); 
		details.addressSearchFeeFixed = details.addressSearchFee.toFixed(2);
		details.lateFeeFixed = details.lateFee.toFixed(2);
		details.totalAmountFixed = details.totalAmount.toFixed(2);
		details.penaltyAmountFixed = details.administrativePenaltyAmount.toFixed(2);
        this.setState({details});
    }

    render(){
        const { language_text, receipt } = this.props;
        const paymentText=language_text.PAYMENT;
        const popupText=language_text.SUBSCRIBE_POPUP;
        return(
            <React.Fragment>
                <div className="detail-data payment-title container-inner">
                    <img src={BoyImg} className="main-img" alt="Banner"/>
                    {/* <h4 className="site--main">Please wait...</h4> */}
                    <div className="payment-details">
                        <ul>
                            <li> <span className="disable-font">{paymentText.VIOLATION_NOTICE}</span>
                                <span>{this.state.details.violationNoticeNumber}</span>
                            </li>
                            <li> <span className="disable-font">{paymentText.PLATE_NUMBER}</span>
                                <span>{this.state.details.plateNumber}</span>
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
                            <li> <span className="disable-font">{paymentText.PENALTY_AMOUNT}</span>
                                <span>${this.state.details.penaltyAmountFixed}</span>
                            </li>
                            {
                                this.state.details.addressSearchFee > 0 &&
                                <li> <span className="disable-font">{paymentText.ADDRESS_SEARCH_FEE}</span>
                                    <span>${this.state.details.addressSearchFeeFixed}</span>
                                </li>
                            }
                            {
                                this.state.details.lateFee > 0 &&
                                <li> <span className="disable-font">{paymentText.LATE_PAYMENT_FEE}</span>
                                    <span>${this.state.details.lateFeeFixed}</span>
                                </li>
                            }
                            <li> <span className="disable-font">{paymentText.SERVICE_CHARGE}</span>
                                <span>${this.state.details.processingFeeFixed}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="payment-details">
                        <ul className="no-border">
                            <li> <span className="disable-font">{paymentText.PAYMENT_AMOUNT}</span>
                                <span>${this.state.details.totalAmountFixed}</span>
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
                                        <div className="model-btn">
                                            <a href="#" className="custom-btn mb-15" onClick={()=>{receipt.display_subscription = true; this.props.updateSubscribe(this.state.details.userId)}}>{popupText.BTN1}</a>
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