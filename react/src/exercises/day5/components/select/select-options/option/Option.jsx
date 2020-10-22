import React from "react";
import PropTypes from "prop-types";
import styles from "./Option.module.css";

const Option = ({ option, onSelect, selected }) => {
  const handleOptionSelect = (event) => {
    event.preventDefault();
    onSelect(option);
  };
  return (
    <li
      className={styles.option}
      onClick={handleOptionSelect}
      data-selected={selected}
    >
      {option.label}
    </li>
  );
};

Option.propTypes = {
  option: PropTypes.shape({ label: PropTypes.string, value: PropTypes.any }),
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
};

export default Option;
