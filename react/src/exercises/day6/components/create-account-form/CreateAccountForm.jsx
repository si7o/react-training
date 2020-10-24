import React, { useReducer, useState } from "react";
import { loginFormReducer, RESET, SET_VALUE } from "./reducer";
import Input from "../input/Input";
import Checkbox from "../checkbox/Checkbox";
import Select from "../select/Select";
import styles from "./CreateAccountForm.module.css";

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
      return !value && "This field needs to be selected.";
    default:
      return "";
  }
};

const CreateAccountForm = () => {
  const [formData, setFormData] = useReducer(
    loginFormReducer,
    initialLoginFormState
  );
  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    const rule = validationRules[name] ?? "";
    const errorMessage = validate(rule, value);

    setErrors({ ...errors, [name]: errorMessage });
  };

  const validateForm = () => {
    const errs = Object.keys(formData).reduce((acc, name) => {
      const rule = validationRules[name] ?? "";
      const value = formData[name];
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

    setFormData({
      type: SET_VALUE,
      payload: { inputName, inputValue },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errs = validateForm();
    const hasErrors = Object.entries(errs).some(([key, value]) => !!value);
    if (hasErrors) {
      return;
    }

    window.alert(JSON.stringify(formData, null, 2));

    setFormData({ type: RESET, payload: initialLoginFormState });
  };

  return (
    <div className={styles.createAccountForm}>
      <h3>Create Account</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Input
            name="name"
            label="First name"
            value={formData.name}
            onChange={handleFieldChange}
            errorMessage={errors.name}
          />

          <Input
            name="lastName"
            label="Last name"
            value={formData.lastName}
            onChange={handleFieldChange}
            errorMessage={errors.lastName}
          />

          <Input
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleFieldChange}
            errorMessage={errors.email}
          />

          <Input
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleFieldChange}
            errorMessage={errors.password}
          />

          <Select
            name="countryCode"
            label="Country"
            value={formData.countryCode}
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
            checked={formData.userAgreement}
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
