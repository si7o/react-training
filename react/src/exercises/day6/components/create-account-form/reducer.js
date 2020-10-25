const SET_VALUE = "SET_VALUE";
const RESET = "RESET";

/**
 *
 * @param {Object} state
 * @param {Object} action { type: ACTION_TYPE, payload: {*} }
 */
const createAccountFormReducer = (state, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue,
      };
    case RESET:
      return action.payload;
    default:
      return state;
  }
};

export { createAccountFormReducer, SET_VALUE, RESET };
