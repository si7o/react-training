import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ name, label, type, value, onChange, errorMessage }) => {
  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        id={name}
        value={value}
        onChange={handleChange}
      />
      <div className={styles.errorMessage}>{errorMessage}</div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  value: PropTypes.any,
  onChange: PropTypes.func,
  errorMessage: PropTypes.any,
};

Input.defaultProps = {
  type: "text",
  onChange: () => {},
  errorMessage: "",
};

export default Input;
