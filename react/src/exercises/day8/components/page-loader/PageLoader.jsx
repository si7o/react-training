import React from "react";
import PropTypes from "prop-types";
import { Backdrop, CircularProgress } from "@material-ui/core";

const PageLoader = () => {
  return (
    <Backdrop open={true} style={{ zIndex: 1000000, color: "#ffffff" }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

PageLoader.propTypes = {};

export default PageLoader;
