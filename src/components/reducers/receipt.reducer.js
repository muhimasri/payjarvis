const initialState = {
    loading: false,
    response_success: null,
    response_fail: null,
    display_subscription: false,
    subscribe: false
}

const receiptReducer = (state = initialState, action) => {

	switch (action.type){
		case 'SEND_PAYMENT_RECEIPT':
            return Object.assign({}, state, {loading: true})
        case 'SEND_PAYMENT_RECEIPT_SUCCESS':
            return Object.assign({}, state, {loading: false, response_success: action.payload, display_subscription: true, subscribe: false})
        case 'SEND_PAYMENT_RECEIPT_FAIL':
            return Object.assign({}, state, {loading: false, response_fail: action.payload, display_subscription: false})
        case 'SEND_PAYMENT_RECEIPT_DISPLAY':
            return Object.assign({}, state, {display_subscription: action.payload})
        case 'UPDATE_SUBSCRIBE':
                return Object.assign({}, state, {subscribe: true})
		default:
			return state;
	}
};

export default receiptReducer;