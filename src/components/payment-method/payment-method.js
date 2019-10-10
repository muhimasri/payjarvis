import './payment-method.scss';
import React from 'react';
import utils from '../../services/utils';

class PaymentMethod extends React.Component {
    constructor(props) {
        super(props);
        const device = utils.getDeviceOperatingSystem();
    }
    
    render() {
        return (
           <div className="payment-method">
           </div>
        )
    }
}
export default PaymentMethod