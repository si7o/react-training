import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.css";
import ErrorMessage from "../error-message/ErrorMessage";

const Select = ({ name, label, options, value, onChange, errorMessage }) => {
  const handleChange = (event) => {
    onChange(event);
  };

  const optionItems = options.map((opt) => (
    <option value={opt.value} key={opt.value}>
      {opt.label}
    </option>
  ));

  const placeHolder = (
    <option disabled value="">
      Select an Option
    </option>
  );
  return (
    <div>
      <div className={styles.select}>
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          aria-invalid={!!errorMessage}
        >
          {placeHolder}
          {optionItems}
        </select>

        <ErrorMessage message={errorMessage} />
      </div>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.any, label: PropTypes.string })
  ),
  value: PropTypes.any,
  onChange: PropTypes.func,
  errorMessage: PropTypes.any,
};

Select.defaultProps = {
  options: [],
  onChange: () => {},
  errorMessage: "",
};

export default Select;
