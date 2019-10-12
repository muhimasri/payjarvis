const initialState = {
    file: null,
    url: null
}

const userReducer = (state = initialState, action) => {

	switch (action.type){
		case 'UPLOAD_IMAGE':
			return Object.assign({}, state, {file: action.file, url: action.url})
		default:
			return state;
	}
};

export default userReducer;