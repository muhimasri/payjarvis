const initialState = {
    loading: false,
    response_success: null,
    response_fail: null
}

const detailReducer = (state = initialState, action) => {

	switch (action.type){
		case 'ADD_DETAIL':
            return Object.assign({}, state, {loading: true})
        case 'ADD_DETAIL_SUCCESS':
            return Object.assign({}, state, {loading: false, response_success: action.payload})
        case 'ADD_DETAIL_FAILURE':
            return Object.assign({}, state, {loading: false, response_fail: action.payload})
		default:
			return state;
	}
};

export default detailReducer;