import {FETCH_PRODS} from '../actions';
import {FETCH_PROD} from '../actions';
import {DELETE_PRODS} from '../actions';
import _ from 'lodash';
export default function(state={}, action){
  switch (action.type) {
    case DELETE_PRODS:
      return _.omit(state, action.payload);
    case FETCH_PROD:
    return {...state, [action.payload.data.id]:action.payload.data};
    case FETCH_PRODS:
      console.log(action.payload.data)
        return _.mapKeys(action.payload.data,'id');
        
    default:
      return state;
  }
}