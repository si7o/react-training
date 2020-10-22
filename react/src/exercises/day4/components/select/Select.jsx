import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.css";
import { useState } from "react";
import Chip from "./chip/Chip";
import SelectOptions from "./select-options/SelectOptions";
import toggle from "./chevron-down.svg";

const Select = ({ name, label, options, value, onChange, multiple }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleRemoveOption = (optionLabel) => {
    onChange(value.filter((opt) => opt.label !== optionLabel));
  };

  const handleBlur = () => {
    setShowOptions(false);
  };

  const handleMultipleSelectOption = (option) => {
    if (value.filter((opt) => opt.label === option.label).length > 0) {
      onChange(value.filter((opt) => opt.label !== option.label));
    } else {
      onChange([...value, option]);
    }
  };

  const handleSingleSelectOption = (option) => {
    if (value.label === option.label) {
      onChange("");
    } else {
      onChange(option);
    }
    setShowOptions(false);
  };

  const handleSelectedItemsClick = () => {
    setShowOptions(!showOptions);
  };

  const handleDropdownButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const selectedValue = multiple
    ? value.map((opt) => (
        <Chip key={opt.label} label={opt.label} onRemove={handleRemoveOption} />
      ))
    : value.label;

  const handleKeyUp = (event) => {
    switch (event.key) {
      case "Enter":
        setShowOptions(!showOptions);
        break;
      case "Escape":
        setShowOptions(false);
        break;
      case "Backspace":
        onChange(value.splice(-1, 1));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div
        className={styles.input}
        id={name}
        tabIndex={0}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
      >
        <div
          className={styles.selectedItems}
          onClick={handleSelectedItemsClick}
        >
          {selectedValue}
          <img
            src={toggle}
            className={styles.toggleDropdown}
            onClick={handleDropdownButtonClick}
            data-open={showOptions}
            alt="toggle dropdown"
          />
        </div>
        {showOptions && (
          <SelectOptions
            options={options}
            selectedOptions={multiple ? value : [{ ...value }]}
            onSelect={
              multiple ? handleMultipleSelectOption : handleSingleSelectOption
            }
          />
        )}
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })
  ).isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

Select.defaultProps = { multiple: false };

export default Select;
