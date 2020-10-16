import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Input from "./Input";

const Form = () => {
  const initialState = {
    input1: { label: "Label 1", value: "value", isValid: false },
    input2: { label: "Label 2", value: "value2", isValid: false },
  };

  const [formState, setFormState] = useState(initialState);

  const inputChangeHandler = (input) => {};

  const submitHandler = () => {};

  const inputItems = Object.keys(initialState).map((inputKey) => (
    <Input name={inputKey} label={formState[inputKey].label} />
  ));

  return <form onSubmit={submitHandler}>{inputItems}</form>;
};
export default Form;
