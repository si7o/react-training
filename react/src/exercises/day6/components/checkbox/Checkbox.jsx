import React from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.css";

const Checkbox = ({ name, label, checked, onChange, errorMessage }) => {
  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <div className={styles.checkbox}>
      <label className={!!errorMessage ? styles.errorMessage : ""}>
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.any,
  onChange: PropTypes.func,
  errorMessage: PropTypes.any,
};

Checkbox.defaultProps = {
  onChange: () => {},
  errorMessage: "",
};

export default Checkbox;
