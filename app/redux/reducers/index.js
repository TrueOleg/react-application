import { combineReducers } from 'redux';
import namesHeroes from './namesHeroes';
import { items } from './loadHeroes';

const rootReducer = combineReducers({
  namesHeroes,
  items
});

export default rootReducer;