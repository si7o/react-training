import React from "react";
import { useLocation } from "react-router";
import { Form } from "./components";

function Day4Class() {
  const { state } = useLocation();
  console.log(state);

  const locaStorageData = localStorage.getItem("locaStorageData");
  console.log(locaStorageData);

  return (
    <div>
      <h1>Day 4 in class</h1>
      <Form />
    </div>
  );
}

export default Day4Class;
