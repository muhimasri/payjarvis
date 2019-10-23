export const sendPaymentReceipt = (email) => (dispatch) => {
    console.log('this is payment receipt data by action :->', email)
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

export const updateSubscribe = () => (dispatch) => {
    dispatch({
        type: 'UPDATE_SUBSCRIBE',
    })
}