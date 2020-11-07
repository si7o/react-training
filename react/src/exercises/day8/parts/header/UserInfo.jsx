import React from "react";
import PropTypes from "prop-types";
import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: { display: "flex", direction: "row", alignItems: "center" },
  avatar: { width: 30, height: 30 },
  username: { marginLeft: 5, fontSize: 12 },
});

const UserInfo = ({ username }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {username && <Avatar className={classes.avatar}>{username[0]}</Avatar>}
      <span className={classes.username}>{username}</span>
    </div>
  );
};

UserInfo.propTypes = { username: PropTypes.string.isRequired };

export default UserInfo;
