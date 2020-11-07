import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Day9 = () => {
  const { id } = useParams();
  const { push } = useHistory();

  const handleBackClick = () => {
    push("/day4-class", { test: "data" });

    localStorage.setItem("locaStorageData", "data");
  };

  return (
    <div>
      <h1>Day 9</h1>
      <span>Id param: {id}</span>

      <button type="button" onClick={handleBackClick}>
        Go Back
      </button>
    </div>
  );
};

Day9.propTypes = {};

export default Day9;
