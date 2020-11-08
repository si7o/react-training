import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SidebarMenu from "../SidebarMenu";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const memoryHistory = createMemoryHistory();
memoryHistory.push("/day8-homework/dashboard");

describe("<SidebarMenu>", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(
      <Router history={memoryHistory}>
        <SidebarMenu />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("selected item changes", () => {
    const { asFragment } = render(
      <Router history={memoryHistory}>
        <SidebarMenu />
      </Router>
    );
    const menuItems = screen.getAllByRole("menuitem");

    expect(menuItems[0]).toHaveClass("Mui-selected");

    userEvent.click(menuItems[3]);

    expect(menuItems[3]).toHaveClass("Mui-selected");
  });
});
