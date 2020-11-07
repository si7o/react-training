import React from "react";
import { render, screen } from "@testing-library/react";

import UserInfo from "../UserInfo";

describe("<UserInfo>", () => {
  test("renders username", () => {
    const username = "User Name";

    render(<UserInfo username={username} />);

    screen.getByText(username);
  });
});
