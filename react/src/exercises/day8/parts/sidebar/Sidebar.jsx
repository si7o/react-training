import React from "react";
import { Drawer } from "@material-ui/core";

import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <SidebarMenu />
    </Drawer>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
