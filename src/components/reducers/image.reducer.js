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
			return Object.assign({}, state, {loading:false , response_success:action.payload})
		case 'UPLOAD_IMAGE_FAIL':
			return Object.assign({}, state, {loading:false , response_failure:action.payload})
		default:
			return state;
	}
};

export default imageReducer;