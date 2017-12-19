import { combineReducers } from 'redux';
import ProdsReducer from './reducer_prods';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  prods: ProdsReducer,
  form: formReducer
});

export default rootReducer;
