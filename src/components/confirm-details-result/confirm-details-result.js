import './confirm-details-result.scss';
import React from 'react';
import CardPayment from '../card-payment'
import Info from './info.png';
import Tooltip from '@material-ui/core/Tooltip';

class ConfirmDetailResult extends React.Component{ 
    
    render(){
		const { payments, language_text, detail_data } = this.props;
		const details= detail_data.response_success;
		const card_field=language_text.CONFIRM_DETAILS_COMPONENT.CARD_FIELDS;
		const serviceCharge = Number(detail_data.response_success.administrativePenaltyAmount * 0.029).toFixed(2);;
		detail_data.response_success.total = Number(detail_data.response_success.administrativePenaltyAmount)
		+ Number(serviceCharge) + 0.3;
		
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
							  <span>$</span>
							<span>{details.administrativePenaltyAmount}</span>
						</li>
						{/* <li>{payments.ADDRESS_SEARCH_FEE}
							<Tooltip title={payments.ADDRESS_SEARCH_FEE}>
								<img src={Info} alt="Info"/>
							</Tooltip>
							<span>$</span>
							<span>12.00</span>
						</li>
						<li>{payments.LATE_PAYMENT_FEE}
							<Tooltip title={payments.LATE_PAYMENT_FEE}>
								<img src={Info} alt="Info"/>
     					 	</Tooltip>
							<span>$</span>
							<span>0.00</span>
						</li> */}
						<li className="disable-font">{payments.SERVICE_CHARGE}
							<Tooltip title={payments.SERVICE_CHARGE}>
								<img src={Info} alt="Info"/>
     					 	</Tooltip>
							<span>${serviceCharge}</span>
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
							<span>${detail_data.response_success.total}</span>
						</li>
					</ul>
					
				</div>

                <CardPayment card_field={card_field} language_text={language_text}  {...this.props} />
           </div>
                
               
            </React.Fragment>
        )
    }
}

export default ConfirmDetailResult;
