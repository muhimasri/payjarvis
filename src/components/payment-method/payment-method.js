import './payment-method.scss';
import React from 'react';
import withHF from '../HOC/withHF';
import utils from '../../services/utils';

class PaymentMethod extends React.Component {
    constructor(props) {
        super(props);
        const device = utils.getDeviceOperatingSystem();
    }
    
    render() {
        return (
           <div className="payment-method">
               <h1>This is Payment Method page</h1>
           </div>
        )
    }
}
export default withHF(PaymentMethod)