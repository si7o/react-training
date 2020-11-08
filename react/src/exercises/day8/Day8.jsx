import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import { Header, Sidebar } from "./parts";
import theme from "./muiTheme";
import {
  Dashboard,
  Integration,
  NewCampaign,
  Settings,
  Subscribers,
} from "./pages";
import { SessionProvider } from "./contexts";

const useStyles = makeStyles({
  container: {
    marginLeft: 180,
    marginTop: 50,
    padding: 10,
  },
});

const Day8 = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <Header />
        <Sidebar />
        <Grid container className={classes.container}>
          <Switch>
            <Route exact path="/day8-homework">
              <Redirect to="/day8-homework/dashboard" />
            </Route>

            <Route path="/day8-homework/dashboard" component={Dashboard} />
            <Route path="/day8-homework/integration" component={Integration} />
            <Route path="/day8-homework/new-campaign" component={NewCampaign} />
            <Route path="/day8-homework/subscribers" component={Subscribers} />
            <Route path="/day8-homework/settings" component={Settings} />
          </Switch>
        </Grid>
      </SessionProvider>
    </ThemeProvider>
  );
};

Day8.propTypes = {};

export default Day8;
