import axios from 'axios';
import {ENV} from '../../config';

export const sendPayment = (data, history) => (dispatch) => {

    //this dispatch will use when api call starts
    dispatch( {
        type: 'SEND_PAYMENT',
      })

    const url = `${ENV.domain}/charge`;
    const id = data.ticketId;
    axios.post(url,data)
      .then(function (response) {        
        dispatch( {
            type: 'SEND_PAYMENT_SUCCESS',
            payload:response.data.data
          })
          history.push(`/payment-receipt/${id}`);
      })
      .catch(function (error) {
        dispatch( {
            type: 'SEND_PAYMENT_FAILURE',
            payload:error
          })
      });

 
    // this dispatch will use when api call returns error
    // setTimeout(() => {
    //     dispatch({
    //         type: 'SEND_PAYMENT_FAIL',
    //         payload: {'status': 'fail'}
    //     })
    // }, 3000);
};