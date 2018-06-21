import * as Const from '../constants';
import axios from 'axios';

export const addName = (data) => {
    return {
      type: Const.ADD_NAME,
      data
    };
  };

export const itemsHasErrored = (bool) => {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
  };

export const itemsIsLoading = (bool) => {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
  };

export const itemsFetchDataSuccess = (json) => {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        data: json
    };
  };

export const itemsFetchData = (url) => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        axios.get(url)
            .then((response) => {

                if (!response) {

                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => {
                dispatch(itemsFetchDataSuccess(response.data))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
  };

export const dispatchVisibilityHeroes = (state) => {
    return {
        type: 'DISPATCH_VISIBLE_HEROES',
        data: state
    };
};

  