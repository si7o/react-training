import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  const { label, name, minLenght, onChange, initialValue } = props;

  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    const validation = value.length >= minLenght;
    setIsValid(validation);

    onChange(name, value, isValid);
  };

  let validationTimeout;
  const onChangeHandler = (event) => {
    clearTimeout(validationTimeout);

    setValue(event.target.value);
    validate();
    // validationTimeout = setTimeout(validate, 400);
  };

  const isTouched = value.length > 0;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        onChange={onChangeHandler}
        value={value}
        className={styles.input}
      />
      {isTouched && !isValid && (
        <span
          className={styles.errorMessage}
        >{`Input lenght is less than ${minLenght}`}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minLenght: PropTypes.number,
};

Input.defaultProps = {
  minLenght: 15,
};

export default Input;
