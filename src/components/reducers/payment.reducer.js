const initialState = {
    loading: false,
    response_success: null,
    response_fail: null
}

const detailReducer = (state = initialState, action) => {

	switch (action.type){
		case 'SEND_PAYMENT':
            return Object.assign({}, state, {loading: true})
        case 'SEND_PAYMENT_SUCCESS':
            return Object.assign({}, state, {loading: false, response_success: action.payload})
        case 'SEND_PAYMENT_FAILURE':
            return Object.assign({}, state, {loading: false, response_fail: action.payload})
		default:
			return state;
	}
};

export default detailReducer;