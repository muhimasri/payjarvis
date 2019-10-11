import { combineReducers } from 'redux';

import languageReducer from './components/reducers/language.reducer';

// Combine with other reducers we may add in the future
const jarvisApp = combineReducers({
  language: languageReducer,
});

export default jarvisApp;
