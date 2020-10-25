import React from "react";
import { CreateAccountForm } from "./components";

function Day6() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>Day 6 Homework</h1>
      <div
        style={{
          backgroundColor: "#418ef1",
          width: "100%",
          height: "100vh",
          minHeight: 700,
          position: "relative",
          display: "block",
        }}
      >
        <CreateAccountForm />
      </div>
    </div>
  );
}

export default Day6;
