const initialState = {
    loading: false,
    response_success: null,
    response_fail: null,
    displayForm: true
}

const detailReducer = (state = initialState, action) => {

	switch (action.type){
		case 'ADD_DETAIL':
            return Object.assign({}, state, {loading: true, response_success: null, response_fail: null})
        case 'ADD_DETAIL_SUCCESS':
            return Object.assign({}, state, {loading: false, response_success: action.payload, displayForm: false})
        case 'ADD_DETAIL_FAILURE':
            return Object.assign({}, state, {loading: false, response_fail: action.payload})
        case 'SET_DISPLAY_FORM':
            return Object.assign({}, state, {displayForm: action.payload})
		default:
			return state;
	}
};

export default detailReducer;