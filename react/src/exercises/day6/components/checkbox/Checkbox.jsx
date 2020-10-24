import React from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.css";

const Checkbox = ({ name, label, value, onChange, errorMessage }) => {
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
          checked={value}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
