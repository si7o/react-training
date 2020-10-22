import React, { useState } from "react";
import { Select } from "./components";

const selectOptions = [
  { label: "option 1", value: 1 },
  { label: "option 2", value: 2 },
  { label: "option 3", value: 3 },
  { label: "option 4", value: 4 },
  { label: "option 5", value: 5 },
  { label: "option 6", value: 6 },
  { label: "option 7", value: 7 },
];

function Day4() {
  const [valueSingle, setValueSingle] = useState("");
  const [valueMultiple, setValueMultiple] = useState([]);

  const handleSingleSelectChange = (newValue) => {
    setValueSingle(newValue);
  };

  const handleMultipleSelectChange = (newValue) => {
    setValueMultiple(newValue);
  };

  return (
    <div>
      <h1>Day 4 Homework</h1>
      <Select
        name="selectSingle"
        label="Select Single"
        options={selectOptions}
        value={valueSingle}
        onChange={handleSingleSelectChange}
      />
      <Select
        name="selectMultiple"
        label="Select multiple"
        options={selectOptions}
        value={valueMultiple}
        multiple
        onChange={handleMultipleSelectChange}
      />
      <pre>{JSON.stringify({ valueSingle, valueMultiple }, null, 2)}</pre>
    </div>
  );
}

export default Day4;
