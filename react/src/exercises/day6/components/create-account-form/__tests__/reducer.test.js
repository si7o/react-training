import { createAccountFormReducer, RESET, SET_VALUE } from "../reducer";

const initialState = { initial: "state" };

const stubbedResetAction = { type: RESET, payload: initialState };

const stubbedUndefinedAction = {
  type: "UNDEFINED",
  payload: { random: "test" },
};

describe("createAccountForm reducer", () => {
  test("SET_VALUE", () => {
    const returnedState = createAccountFormReducer(initialState, {
      type: SET_VALUE,
      payload: { inputName: "name", inputValue: "value" },
    });

    expect(returnedState).toEqual({ initial: "state", name: "value" });
  });

  test("SET_VALUE with invalid payload", () => {
    const returnedState = createAccountFormReducer(initialState, {
      type: SET_VALUE,
      payload: { invalidkey: "name", incalidValue: "value" },
    });

    expect(returnedState).toEqual({ initial: "state", undefined: undefined });
  });

  test("RESET", () => {
    const returnedState = createAccountFormReducer(
      { initial: "state", test: "value" },
      { type: RESET, payload: initialState }
    );

    expect(returnedState).toEqual(initialState);
  });

  test("Undefined Action", () => {
    const returnedState = createAccountFormReducer(initialState, {
      type: "UNDEFINED",
      payload: { random: "test" },
    });

    expect(returnedState).toEqual(initialState);
  });
});
