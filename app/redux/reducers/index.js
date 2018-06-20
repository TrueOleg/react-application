import { combineReducers } from 'redux';
import namesHeroes from './namesHeroes';
import { items, itemsIsLoading, itemsHasErrored } from './loadHeroes';

const rootReducer = combineReducers({
  namesHeroes,
  items,
  itemsIsLoading,
  itemsHasErrored
});

export default rootReducer;