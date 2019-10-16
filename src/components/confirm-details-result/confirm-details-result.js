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
            showCardPayment:!this.state.showCardPayment
        })
    }

    render(){
        const { payments,language_text } = this.props;
        const { showCardPayment } = this.state;

        const card_field=language_text.CONFIRM_DETAILS_COMPONENT.CARD_FIELDS;
        
        return(
            <React.Fragment>
                <div className="detail-data payment-title">
				<h4>Payment</h4>

                <div className="payment-details">
					<ul>
						<li>{payments.ADMINISTRATIVE_PENALTY}
							<span>$50.00</span>
						</li>
						<li>{payments.ADDRESS_SEARCH_FEE}
							<span>$12.00</span>
						</li>
						<li>{payments.LATE_PAYMENT_FEE}
							<span>$25.00</span>
						</li>
						<li className="disable-font">{payments.SERVICE_CHARGE}
							<span>$8.23</span>
						</li>
					</ul>

					<ul>
						<li>test@gmail.com
							<span>$9.50</span>
						</li>
						<li>xxx@gmail.com
							<span>$80.00</span>
						</li>
					</ul>

					<ul className="border-0">
						<li>{payments.TOTAL}
							<span>$00.00</span>
						</li>
					</ul>
				</div>

                <div className="btn-pay">
					<a href="#" className="custom-btn btn-gray mb-15">Pay</a>
					<a href="#" className={showCardPayment ? "custom-btn" : "custom-btn btn-gray"} onClick={this.showPaymentForm.bind(this)}>Pay with Card</a>
				</div>
{/*                
                <input type="checkbox"/>Split Payment
                
                <br/> */}
                { showCardPayment &&
                    <CardPayment card_field={card_field} language_text={language_text}  {...this.props} />
                }
           </div>
                
               
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
