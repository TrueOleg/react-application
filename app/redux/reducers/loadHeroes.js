import * as Const from '../constants';

const initialState = {
    results: [],
}

export const itemsHasErrored = (state = false, action) => {
    switch (action.type) {
        case Const.ITEMS_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}

export const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
        case Const.ITEMS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export const items = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case Const.ITEMS_FETCH_DATA_SUCCESS:
            return {
                ...state, 
                results: state.results.concat(data.results)
              }

        default:
            return state;
    }
}