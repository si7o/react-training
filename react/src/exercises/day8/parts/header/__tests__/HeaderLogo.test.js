import React from "react";
import { render, screen } from "@testing-library/react";

import HeaderLogo from "../HeaderLogo";

describe("<HeaderLogo>", () => {
  test("renders logo text", () => {
    const text = "Test Text";

    render(<HeaderLogo text={text} />);

    screen.getByText(text);
  });
});
