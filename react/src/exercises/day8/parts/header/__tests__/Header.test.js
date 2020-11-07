import React from "react";
import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router";

import Header from "../Header";

describe("<Header>", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
