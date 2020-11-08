import React, { useContext } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { sessionActions, SessionContext } from "../../../../contexts";
import { useState } from "react";

const UserInfoForm = (props) => {
  const { username, avatarUrl, dispatch } = useContext(SessionContext);

  const [usernameValue, setUsernameValue] = useState(username);
  const [avatarUrlValue, setAvatarUrlValue] = useState(avatarUrl);

  const handleUsernameChange = (event) => setUsernameValue(event.target.value);
  const handleAvatarUrlChange = (event) =>
    setAvatarUrlValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: sessionActions.SET_USERNAME, payload: usernameValue });
    dispatch({ type: sessionActions.SET_AVATAR_URL, payload: avatarUrlValue });
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Grid item container spacing={2}>
        <Grid item md={4} sm={12}>
          <TextField
            label="User Name"
            name="username"
            value={usernameValue}
            onChange={handleUsernameChange}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item md={8} sm={12}>
          <TextField
            label="Avatar URL"
            name="avatarUrl"
            value={avatarUrlValue}
            onChange={handleAvatarUrlChange}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} container justify="flex-end">
          <Grid item md={4} xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

UserInfoForm.propTypes = {};

export default UserInfoForm;
