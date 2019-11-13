import axios from 'axios';
import {ENV} from '../../config';

export const sendPaymentReceipt = (email) => (dispatch) => {
    //this dispatch will use when api call starts
    dispatch({
        type: 'SEND_PAYMENT_RECEIPT'
    })
    //this dispatch will use when api call success 
    setTimeout(() => {
        dispatch({
            type: 'SEND_PAYMENT_RECEIPT_SUCCESS',
            payload: {'status': 'success'}
        })
    }, 3000);
    // this dispatch will use when api call returns error
    // setTimeout(() => {
    //     dispatch({
    //         type: 'SEND_PAYMENT_RECEIPT_FAILURE',
    //         payload: {'status': 'fail'}
    //     })
    // }, 3000);
};

export const updateDisplay = (val) => (dispatch) => {
    dispatch({
        type: 'SEND_PAYMENT_RECEIPT_DISPLAY',
        payload: val
    })
}

export const updateSubscribe = (userId) => (dispatch) => {
    dispatch({
        type: 'UPDATE_SUBSCRIBE',
    })
    const url = `${ENV.server}/users/${userId}`;
    axios.put(url, {subscribed: true})
      .then(function (response) {        
        // dispatch( {
        //     type: 'SEND_PAYMENT_SUCCESS',
        //     payload:response.data.data
        //   })
      })
      .catch(function (error) {
        // dispatch( {
        //     type: 'SEND_PAYMENT_FAILURE',
        //     payload:error
        //   })
      });
}