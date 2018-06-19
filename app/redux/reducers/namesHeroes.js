import * as Const from '../constants';

const initialState = {
    names: [],
    zdsffsdfd: 1,
    sddgf:2,
}

const nameHeroes = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
      case Const.ADD_NAME:
        return {
          ...state, 
          names: state.names.concat(data)
        }
      default: return state;  
  }
}

export default nameHeroes;
