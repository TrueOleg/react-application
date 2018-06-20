import * as Const from '../constants';

const initialState = {
    names: [],
    heroes: [],
    sddgf:2,
}

const findName = (state, arr, name, action) => {
  const i = arr.indexOf(name, 0);
  const data = action.data;
  switch (i) {
    case -1:
      return {
        ...state, 
        names: state.names.concat(data)
      }
    default:
    return {
      ...state, 
      names: state.names.splice(0, i)
    }  
  }
}

const nameHeroes = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
      case Const.ADD_NAME:
        const arr = state.names;
        return findName(state, arr, data, action)
        
      default: return state;  
  }
}

export default nameHeroes;
