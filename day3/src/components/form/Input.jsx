import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const Input = (props) => {
  const { label, name, minLenght } = props;

  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const updateParentState = () => {};

  const validate = () => {
    const validation = value.length >= minLenght;
    setIsValid(validation);

    updateParentState();
  };

  let validationTimeout;
  const onChangeHandler = (event) => {
    clearTimeout(validationTimeout);

    setValue(event.target.value);
    validationTimeout = setTimeout(validate, 300);
  };

  const isTouched = value.length > 0;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        onChange={onChangeHandler}
        value={value}
      />
      {isTouched && !isValid && (
        <span>{`Input lenght is less than ${minLenght}`}</span>
      )}
    </>
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
