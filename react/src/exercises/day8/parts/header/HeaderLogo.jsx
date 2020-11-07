import { styled } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

// Styles using MUI styled
const StyledLogo = styled("div")({
  backgroundColor: "rgb(51,129,247)",
  width: 180,
  height: 50,
  lineHeight: "50px",
  fontFamily: "Verdana",
  textAlign: "center",
  color: "#ffffff",
  fontSize: 20,
  textShadow: "0 0 2px rgb(255,255,255, 0.4)",
});

const HeaderLogo = ({ text }) => {
  return <StyledLogo>{text}</StyledLogo>;
};

HeaderLogo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderLogo;
