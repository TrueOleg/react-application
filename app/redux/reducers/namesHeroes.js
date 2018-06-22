import * as Const from '../constants';
import { findName } from './helpers';

const initialState = {
    names: [],
};

const nameHeroes = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
      case Const.ADD_NAME:
        const arr = state.names;
        return findName(state, arr, data, action);
        
      default: return state;  
  }
};

export default nameHeroes;
