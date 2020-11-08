import { Grid, Typography } from "@material-ui/core";
import React from "react";
import UserInfoForm from "./parts/user-info-form/UserInfoForm";

const Settings = () => {
  return (
    <Grid item xs={12} container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">Setup user info</Typography>
      </Grid>
      <UserInfoForm />
    </Grid>
  );
};

export default Settings;
