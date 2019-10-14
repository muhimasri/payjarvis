import { combineReducers } from 'redux';

import languageReducer from './components/reducers/language.reducer';
import imageReducer from './components/reducers/image.reducer';
import detailReducer from './components/reducers/detail.reducer';
import paymentReducer from './components/reducers/payment.reducer';

// Combine with other reducers we may add in the future
const jarvisApp = combineReducers({
  language: languageReducer,
  image: imageReducer,
  detail: detailReducer,
  payment: paymentReducer
});

export default jarvisApp;
