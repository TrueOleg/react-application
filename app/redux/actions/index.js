import * as Const from '../constants';

export const addName = (data) => {
    return {
      type: Const.ADD_NAME,
      data
    };
  };