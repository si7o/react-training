import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.css";
import { useState } from "react";
import Chip from "./chip/Chip";
import SelectOptions from "./select-options/SelectOptions";
import toggle from "./chevron-down.svg";

const Select = ({ name, label }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleRemoveOption = (optionLabel) => {
    setSelectedOptions(
      selectedOptions.filter((opt) => opt.label !== optionLabel)
    );
  };

  const handleSelectOption = (option) => {
    if (
      selectedOptions.filter((opt) => opt.label === option.label).length > 0
    ) {
      setSelectedOptions(
        selectedOptions.filter((opt) => opt.label !== option.label)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }

    setShowOptions(false);
  };

  const handleSelectedItemsClick = (event) => {
    setShowOptions(!showOptions);
  };

  const selectedChips = selectedOptions.map((opt) => (
    <Chip key={opt.label} label={opt.label} onRemove={handleRemoveOption} />
  ));

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className={styles.input} id={name}>
        <div className={styles.selectedItems}>
          {selectedChips}
          <img
            src={toggle}
            className={styles.toggleDropdown}
            onClick={handleSelectedItemsClick}
            data-open={showOptions}
            alt="toggle dropdown"
          />
        </div>
        {showOptions && (
          <SelectOptions
            options={[
              { label: "option 1", value: 1 },
              { label: "option 2", value: 2 },
              { label: "option 3", value: 3 },
              { label: "option 4", value: 4 },
              { label: "option 5", value: 5 },
              { label: "option 6", value: 6 },
              { label: "option 7", value: 7 },
            ]}
            selectedOptions={selectedOptions}
            onSelect={handleSelectOption}
          />
        )}
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
