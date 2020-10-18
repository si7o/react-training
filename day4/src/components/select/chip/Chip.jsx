import React from "react";
import PropTypes from "prop-types";
import styles from "./Chip.module.css";

const Chip = ({ label, onRemove }) => {
  const handleChipRemove = (event) => {
    onRemove(label);
    event.stopPropagation();
  };

  return (
    <span className={styles.chip}>
      {label}
      <button onClick={handleChipRemove}>&times;</button>
    </span>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Chip;
