import './confirm-details-result.scss';
import React from 'react';
import CardPayment from '../card-payment'
import Utils from '../../services/utils';
import Apple from './apple-pay.svg';
import Gpay from './googlepay.svg';
import Info from './info.png';
import Tooltip from '@material-ui/core/Tooltip';

class ConfirmDetailResult extends React.Component{ 

    state={
        showCardPayment:false
    }
    
    showPaymentForm = () => {
        this.setState({
            showCardPayment:!this.state.showCardPayment
        })
    }

    render(){

		var moduleCode = Utils.getDeviceOperatingSystem();

		const { payments, language_text, detail_data } = this.props;

		const { showCardPayment } = this.state;

		const details= detail_data.response_success;
		
        const card_field=language_text.CONFIRM_DETAILS_COMPONENT.CARD_FIELDS;
		let imgText;
		if(moduleCode === 'ios')
			imgText = <img src={Apple} alt="Apple"/>
		else if (moduleCode === 'android')
			imgText =<img src={Gpay} alt="Gpay"/>
		else 
			imgText = 'Pay'

		return(
            <React.Fragment>
                <div className="detail-data payment-title">
				<h4>Payment</h4>
                <div className="payment-details">
					<ul>
						<li>{payments.ADMINISTRATIVE_PENALTY}
							<Tooltip title={payments.ADMINISTRATIVE_PENALTY}>
								<img src={Info} alt="Info"/>
     					 	</Tooltip>
							<span>${details.administrativePenaltyAmount}</span>
						</li>
						<li>{payments.ADDRESS_SEARCH_FEE}
							<Tooltip title={payments.ADDRESS_SEARCH_FEE}>
								<img src={Info} alt="Info"/>
							</Tooltip>
							<span>$12.00</span>
						</li>
						<li>{payments.LATE_PAYMENT_FEE}
							<Tooltip title={payments.LATE_PAYMENT_FEE}>
								<img src={Info} alt="Info"/>
     					 	</Tooltip>
							<span>$25.00</span>
						</li>
						<li className="disable-font">{payments.SERVICE_CHARGE}
							<Tooltip title={payments.SERVICE_CHARGE}>
								<img src={Info} alt="Info"/>
     					 	</Tooltip>
							<span>$8.23</span>
						</li>
					</ul>

					{/* <ul>
						<li>test@gmail.com
							<span>$9.50</span>
						</li>
						<li>xxx@gmail.com
							<span>$80.00</span>
						</li>
					</ul> */}

					<ul className="border-0">
						<li>{payments.TOTAL}
							
							<span>$00.00</span>
						</li>
					</ul>
					
				</div>

                <div className="btn-pay">
					<a href="#" className="custom-btn btn-gray mb-15">{imgText}</a>
					<a href="#" className={showCardPayment ? "custom-btn" : "custom-btn btn-gray"} onClick={this.showPaymentForm.bind(this)}>{payments.PAY_WITH_CARD}</a>
				</div>
				               
                {/* <div className="cust-check">
					<label className="container">Split Payment
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
                </div> */}
                
                { showCardPayment &&
                    <CardPayment card_field={card_field} language_text={language_text}  {...this.props} />
                }
           </div>
                
               
            </React.Fragment>
        )
    }
}

export default ConfirmDetailResult;
