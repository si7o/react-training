import { useReducer } from "react";
import { createAccountFormReducer, RESET, SET_VALUE } from "./reducer";

const buildFormState = (initialValues) => {
  return Object.entries(initialValues).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: { value: value, touched: false },
    };
  }, {});
};

const useForm = (initialValues) => {
  const initialFormState = buildFormState(initialValues);

  const [formState, setFormState] = useReducer(
    createAccountFormReducer,
    initialFormState
  );

  const getFormData = () =>
    Object.entries(formState).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value.value }),
      {}
    );

  const setValue = (inputName, inputValue) => {
    setFormState({ type: SET_VALUE, payload: { inputName, inputValue } });
  };

  const reset = () => {
    setFormState({ type: RESET, payload: initialFormState });
  };

  return { formState, setValue, getFormData, reset };
};

export { useForm };
