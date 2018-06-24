export const findName = (state, arr, name, action) => {
    const data = action.data;
    const i = arr.findIndex( elem =>  elem == data );
    
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