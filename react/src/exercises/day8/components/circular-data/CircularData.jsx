import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";

const circleSize = 80;

const useStyles = makeStyles((theme) => ({
  root: {
    width: circleSize,
    height: circleSize,
  },
  bottom: { color: theme.palette.grey[200] },
  top: {
    color: theme.palette.warning.dark,
    position: "absolute",
    left: 0,
  },
  innerText: {
    width: circleSize - 12,
    height: circleSize - 44,
    padding: "22px 6px",
    textAlign: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "14px",
    color: theme.palette.grey[700],
  },
  value: (props) => ({
    fontSize: 14,
    lineHeight: "16px",
    fontWeight: 600,
    color: props.isPercentage
      ? theme.palette.warning.dark
      : theme.palette.grey[700],
  }),
}));

const CircularData = (props) => {
  const { label, value, isPercentage } = props;

  const classes = useStyles(props);

  return (
    <Box position="relative" display="inline-flex" className={classes.root}>
      <CircularProgress
        className={classes.bottom}
        variant="static"
        value={100}
        size={circleSize}
        thickness={2}
      />
      {isPercentage && (
        <CircularProgress
          variant="static"
          className={classes.top}
          value={value}
          size={circleSize}
          thickness={2}
        />
      )}
      <Box position="absolute" className={classes.innerText}>
        <Typography gutterBottom className={classes.label}>
          {label}
        </Typography>
        <Typography gutterBottom className={classes.value}>
          {value.toString().substring(0, 5)}
        </Typography>
      </Box>
    </Box>
  );
};

CircularData.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isPercentage: PropTypes.bool,
};

export default CircularData;
