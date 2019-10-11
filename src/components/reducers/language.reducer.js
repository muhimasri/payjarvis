import { LANGUAGE } from "../../config";
import { find } from "lodash";

const initialState = {
    language: LANGUAGE.LANGUAGE_DEFAULT,
    all_language: LANGUAGE.LANGUAGE_MENU,
    language_text: find(LANGUAGE.LANGUAGE_TEXT, {"LANGUAGE": "ENGLISH"}) 
}

const userReducer = (state = initialState, action) => {

	switch (action.type){
		case 'CHANGE_LANGUAGE':
			return Object.assign({}, state, {language: action.payload, language_text: find(LANGUAGE.LANGUAGE_TEXT, {"LANGUAGE": action.payload})})
		default:
			return state;
	}
};

export default userReducer;