import * as Const from '../constants';

const initialState = { results: [] };

export const items = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case Const.GET_HEROES:
            return {
                ...state, 
                results: state.results.concat(data.results)
              };
        case Const.ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
};