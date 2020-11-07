import React, { useEffect, useReducer, useState } from "react";
import { createAccountFormReducer, RESET, SET_VALUE } from "./reducer";
import Input from "../input/Input";
import Checkbox from "../checkbox/Checkbox";
import Select from "../select/Select";
import styles from "./CreateAccountForm.module.css";
import { useForm } from "./sideEffects";

const initialLoginFormState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  countryCode: "",
  userAgreement: false,
};

const validationRules = {
  name: "isRequired",
  lastName: "isRequired",
  email: "isEmail",
  password: "isRequired",
  countryCode: "isRequired",
  userAgreement: "isChecked",
};

const validate = (rule, value) => {
  switch (rule) {
    case "isRequired":
      return !value && "This field is required.";
    case "isEmail":
      // TODO
      return !value && "This field is not an Email.";
    case "isChecked":
      return !value && "This field needs to be checked.";
    default:
      return "";
  }
};

const CreateAccountForm = () => {
  const { formState, setValue, getFormData, reset } = useForm(
    initialLoginFormState
  );
  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    const rule = validationRules[name] ?? "";
    const errorMessage = validate(rule, value);

    setErrors({ ...errors, [name]: errorMessage });
  };

  const validateForm = () => {
    const errs = Object.keys(formState).reduce((acc, name) => {
      const rule = validationRules[name] ?? "";
      const value = formState[name].value;
      const errorMessage = validate(rule, value);
      return { ...acc, [name]: errorMessage };
    }, {});
    setErrors(errs);

    return errs;
  };

  const handleFieldChange = (event) => {
    const inputName = event.target.name;
    const inputValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    validateInput(inputName, inputValue);

    setValue(inputName, inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errs = validateForm();
    const hasErrors = Object.entries(errs).some(([key, value]) => !!value);
    if (hasErrors) {
      return;
    }

    window.alert(JSON.stringify(getFormData(), null, 2));

    reset({ type: RESET, payload: initialLoginFormState });
  };

  return (
    <div className={styles.createAccountForm}>
      <h3>Create Account</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Input
            name="name"
            label="First name"
            value={formState.name.value}
            onChange={handleFieldChange}
            errorMessage={errors.name}
          />

          <Input
            name="lastName"
            label="Last name"
            value={formState.lastName.value}
            onChange={handleFieldChange}
            errorMessage={errors.lastName}
          />

          <Input
            name="email"
            label="Email"
            value={formState.email.value}
            onChange={handleFieldChange}
            errorMessage={errors.email}
          />

          <Input
            name="password"
            label="Password"
            type="password"
            value={formState.password.value}
            onChange={handleFieldChange}
            errorMessage={errors.password}
          />

          <Select
            name="countryCode"
            label="Country"
            value={formState.countryCode.value}
            onChange={handleFieldChange}
            errorMessage={errors.countryCode}
            options={[
              { value: "AU", label: "Australia" },
              { value: "RO", label: "Romania" },
              { value: "ES", label: "Spain" },
            ]}
          />
        </fieldset>
        <fieldset>
          <Checkbox
            name="userAgreement"
            label="Accept the terms of service"
            checked={formState.userAgreement.value}
            onChange={handleFieldChange}
            errorMessage={errors.userAgreement}
          />

          <input type="submit" value="Create account" />
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAccountForm;
