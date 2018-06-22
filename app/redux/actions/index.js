import * as Const from '../constants';
import axios from 'axios';

export const addName = (data) => {
    return {
      type: Const.ADD_NAME,
      data
    };
  };

export const itemsHasErrored = (data) => {
    return {
        type: Const.ITEMS_HAS_ERRORED,
        hasErrored: data
    };
  };

export const itemsFetchDataSuccess = (data) => {
    return {
        type: Const.ITEMS_FETCH_DATA_SUCCESS,
        data: data
    };
  };

export const itemsFetchData = (url) => {
    return (dispatch) => {

        axios.get(url)
            .then((response) => {

                if (!response) {

                    throw Error(response.statusText);
                }
                
                dispatch(itemsFetchDataSuccess(response.data));

            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
  };


  