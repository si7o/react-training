import React from "react";
import PropTypes from "prop-types";
import Option from "./option/Option";
import styles from "./SelectOptions.module.css";

const SelectOptions = ({ options, onSelect, selectedOptions }) => {
  const optionItems = options.map((opt) => (
    <Option
      key={opt.label}
      option={opt}
      onSelect={onSelect}
      selected={selectedOptions.filter((o) => o.label === opt.label).length > 0}
    ></Option>
  ));

  return <ul className={styles.selectOptions}>{optionItems}</ul>;
};

SelectOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })
  ),
  selectedOptions: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })
  ),
  onSelect: PropTypes.func,
};

export default SelectOptions;
