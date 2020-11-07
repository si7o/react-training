import React from "react";
import { AppBar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HeaderLogo from "./HeaderLogo";
import UserInfo from "./UserInfo";
import SearchBox from "./SearchBox";
import { useLocation } from "react-router";

// styles using makeStyles & theme
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 20,
  },
}));

const Header = () => {
  const classes = useStyles();
  const location = useLocation();

  const title = location.state?.title || "Dashboard";

  return (
    <AppBar color="transparent" className={classes.root}>
      <HeaderLogo text="Leads Builder" />
      <Box
        display="flex"
        alignItems="flex-start"
        ml={1}
        fontSize={18}
        color="#a8a8a8"
        fontWeight="500"
        fontFamily="Verdana"
      >
        {title}
      </Box>
      <SearchBox />
      <UserInfo username="User Name" />
    </AppBar>
  );
};

export default Header;
