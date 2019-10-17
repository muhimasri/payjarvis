import React from 'react';
import './paid-receipt.scss'
import WithF from '../HOC/withF';
import BoyImg from './boy.png';

class PaidReceipt extends React.Component{

    render(){
        return(
            <div class="detail-data">
				<h4>Your Parking Ticket Butler</h4>
					<div class="receipt-container">
						<img src={BoyImg} class="header-img"/>
						<h3>Paid Receipt</h3>
						<ul>
							<li>Violation Notice Number
								<span>PB322434</span>
							</li>
							<li>Payment Amount
								<span>$89.50</span>
							</li>
							<li>Payment Date
								<span>13 September 2019</span>
							</li>
							<li>Reference Number
								<span>919823489</span>
							</li>
						</ul>
						<ul>
							<li>Violation Notice Number
								<span>PB322434</span>
							</li>
							<li>Payment Amount
								<span>$89.50</span>
							</li>
							<li>Payment Date
								<span>13 September 2019</span>
							</li>
							<li>Reference Number
								<span>919823489</span>
							</li>
						</ul>
						<ul class="border-0">
							<li class="enable-font">Total
								<span>$89.50</span>
							</li>
						</ul>
					</div>
			</div>
        )
    }

}

export default WithF(PaidReceipt);