import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// styles using makeStyles & theme
const useStyles = makeStyles((theme) => ({
  inputRoot: {
    backgroundColor: "#f2f6fa",
    borderRadius: 17,
    paddingRight: theme.spacing(3),
    marginLeft: "auto",
    marginRight: 60,
  },
  inputInput: {
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchBox = () => {
  const classes = useStyles();

  return (
    <InputBase
      placeholder="Search"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ "aria-label": "search" }}
      endAdornment={<SearchIcon htmlColor="#3381f7" />}
    />
  );
};

export default SearchBox;
