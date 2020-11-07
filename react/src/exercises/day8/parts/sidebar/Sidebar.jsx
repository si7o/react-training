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

export default Sidebar;
