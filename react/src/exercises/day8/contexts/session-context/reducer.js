import actions from "./actions";

const reducer = ({ state, action }) => {
  switch (action.type) {
    case actions.SET_USERNAME:
      return { ...state, username: action.payload };
    case actions.SET_AVATAR_URL:
      return { ...state, avatarUrl: action.payload };
    default:
      return state;
  }
};

export default reducer;
