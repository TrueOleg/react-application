export const findName = (state, arr, name, action) => {
    const i = arr.indexOf(name, 0);
    const data = action.data;
    switch (i) {
      case -1:
        return {
          ...state, 
          names: state.names.concat(data)
        };
      default:
      return {
        ...state, 
        names: state.names.splice(0, i)
      };
    }
  };