const contactDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "changeState": {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      break;
  }
  return state;
};

export default contactDetailsReducer;
