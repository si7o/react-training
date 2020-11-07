import React from "react";
import { MenuList, MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import SpeedIcon from "@material-ui/icons/Speed";
import SettingsIcon from "@material-ui/icons/Settings";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

const SidebarMenu = () => {
  return (
    <MenuList>
      <MenuItem
        component={NavLink}
        to={{
          pathname: "/day8-homework/dashboard",
          state: { title: "Dashboard" },
        }}
        activeClassName="Mui-selected"
      >
        <SpeedIcon /> Dashboard
      </MenuItem>
      <MenuItem
        component={NavLink}
        to={{
          pathname: "/day8-homework/new-campaign",
          state: { title: "New Campaign" },
        }}
        activeClassName="Mui-selected"
      >
        <RecordVoiceOverIcon /> New Campaign
      </MenuItem>
      <MenuItem
        component={NavLink}
        to={{
          pathname: "/day8-homework/integration",
          state: { title: "Integration" },
        }}
        activeClassName="Mui-selected"
      >
        <GroupWorkIcon /> Integration
      </MenuItem>
      <MenuItem
        component={NavLink}
        to={{
          pathname: "/day8-homework/subscribers",
          state: { title: "Subscribers" },
        }}
        activeClassName="Mui-selected"
      >
        <RssFeedIcon /> Subscribers
      </MenuItem>
      <MenuItem
        component={NavLink}
        to={{
          pathname: "/day8-homework/settings",
          state: { title: "Settings" },
        }}
        activeClassName="Mui-selected"
      >
        <SettingsIcon /> Settings
      </MenuItem>
    </MenuList>
  );
};

export default SidebarMenu;
