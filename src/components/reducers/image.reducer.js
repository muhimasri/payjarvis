const initialState = {
	response_success:null,
	response_failure:null,
	loading:false
}

const imageReducer = (state = initialState, action) => {

	switch (action.type){
		case 'UPLOAD_IMAGE':
			return Object.assign({}, state, {loading:true})
		case 'UPLOAD_IMAGE_SUCCESS':
			return Object.assign({}, state, {loading:false})
		case 'UPLOAD_IMAGE_FAILURE':
			return Object.assign({}, state, {loading:false , response_failure:action.payload})
		case 'GET_IMAGE_DETAIL_DATA':
			return Object.assign({}, state, {loading:true, response_success: null, response_failure: null})
		case 'GET_IMAGE_DETAIL_DATA_SUCCESS':
			return Object.assign({}, state, {loading:false, response_success:action.payload})
		case 'GET_IMAGE_DETAIL_DATA_FAILURE':
			return Object.assign({}, state, {loading:false, response_failure:action.payload})
		default:
			return state;
	}
};

export default imageReducer;