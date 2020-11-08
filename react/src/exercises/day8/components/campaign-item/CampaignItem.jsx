import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Divider,
  Grid,
  Paper,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import { CircularData } from "..";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 80,
    height: 80,
  },
  campaignName: { fontWeight: 600, fontSize: 14 },
  campaignType: { color: theme.palette.info.main, fontSize: 12 },
  campaignStart: { fontSize: 12, color: theme.palette.grey[400] },
  campaignEnd: {
    fontSize: 12,
    color: theme.palette.grey[400],
    fontWeight: 700,
  },
  campaingFinished: {
    fontSize: 12,
    color: theme.palette.error.dark,
    fontWeight: "inherit",
  },
  campaingOngoing: {
    fontSize: 12,
    color: theme.palette.success.main,
    fontWeight: "inherit",
  },
}));

const CampaignItem = (props) => {
  const {
    name,
    imageUrl,
    type,
    startDate,
    endDate,
    visitors,
    entrants,
  } = props.campaign;

  const classes = useStyles();

  const status =
    Date.parse(endDate) >= Date.now() ? (
      <Typography className={classes.campaingOngoing} display="inline">
        Ongoing
      </Typography>
    ) : (
      <Typography className={classes.campaingFinished} display="inline">
        Finished
      </Typography>
    );
  const conversionRate = (entrants / visitors) * 100;

  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      component={Paper}
      elevation={2}
      alignItems="center"
    >
      <Grid item xs={1}>
        <Avatar alt={name} src={imageUrl} className={classes.avatar} />
      </Grid>

      <Grid item xs={5} container direction="column">
        <Typography className={classes.campaignName}>{name}</Typography>
        <Typography className={classes.campaignType}>{type}</Typography>
        <Typography className={classes.campaignStart} gutterBottom>
          {startDate}
        </Typography>
        <Divider variant="middle" />
        <Box className={classes.campaignEnd}>
          {status} End Date {endDate}
        </Box>
      </Grid>

      <Grid item xs={1}>
        <CircularData label="Visitors" value={visitors} />
      </Grid>

      <Grid item xs={1}>
        <CircularData label="Entrants" value={entrants} />
      </Grid>

      <Grid item xs={1}>
        <CircularData label="Conv. Rate" value={conversionRate} isPercentage />
      </Grid>

      <Grid item container xs={3} justify="flex-end">
        actions
      </Grid>
    </Grid>
  );
};

CampaignItem.propTypes = {
  campaign: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    type: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    visitors: PropTypes.number,
    entrants: PropTypes.number,
  }).isRequired,
};

export default CampaignItem;
