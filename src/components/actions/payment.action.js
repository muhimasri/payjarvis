export const sendPayment = (data, history) => (dispatch) => {
    console.log('this is payment data by action :->', data)
    //this dispatch will use when api call starts
    dispatch({
        type: 'SEND_PAYMENT'
    })
    //this dispatch will use when api call success 
    setTimeout(() => {
        dispatch({
            type: 'SEND_PAYMENT_SUCCESS',
            payload: {'status': 'success'}
        })
        history.push('/payment-receipt')
    }, 3000);
    // this dispatch will use when api call returns error
    // setTimeout(() => {
    //     dispatch({
    //         type: 'SEND_PAYMENT_FAIL',
    //         payload: {'status': 'fail'}
    //     })
    // }, 3000);
};