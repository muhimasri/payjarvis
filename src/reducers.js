import { combineReducers } from 'redux';

import languageReducer from './components/reducers/language.reducer';
import imageReducer from './components/reducers/image.reducer';

// Combine with other reducers we may add in the future
const jarvisApp = combineReducers({
  language: languageReducer,
  image: imageReducer
});

export default jarvisApp;
