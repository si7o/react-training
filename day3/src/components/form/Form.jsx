import React from "react";
import { useState } from "react";
import Input from "./input/Input";

const Form = () => {
  const initialState = {
    input1: { label: "Label 1", value: "sss", isValid: false },
    input2: { label: "Label 2", value: "", isValid: false },
  };

  const [formState, setFormState] = useState(initialState);

  const handleFormInputChange = (name, value, isValid) => {
    const newFormState = { ...formState };

    newFormState[name] = { ...newFormState[name], value, isValid };
    setFormState(newFormState);
  };

  const resetFormState = () => setFormState(initialState);

  const isFormValid = Object.values(formState).every((field) => field.isValid);

  const submitHandler = (event) => {
    event.preventDefault();

    window.alert(JSON.stringify(formState, null, 2));
    if (isFormValid) {
      resetFormState();
    }
  };

  const inputItems = Object.keys(initialState).map((inputKey) => (
    <Input
      name={inputKey}
      key={inputKey}
      label={formState[inputKey].label}
      onChange={handleFormInputChange}
      initialValue={formState[inputKey].value}
    />
  ));

  return (
    <>
      <h1>Inputs Form</h1>
      <form onSubmit={submitHandler}>
        {inputItems}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default Form;
