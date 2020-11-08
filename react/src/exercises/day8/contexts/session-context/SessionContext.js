import React, { createContext, useReducer } from "react";
import initialState from "./initialState";
import sessionReducer from "./reducer";

// instead of creating 2 contexts, one for state, one for dispatcher,
// I add this dispatch to the CreateContext so useContext(SessionContext)
// sugests to use the initialState props & dispatch
const SessionContext = createContext({
  ...initialState,
  dispatch: (_action) => {},
});

const SessionProvider = (props) => {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  return (
    <SessionContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
