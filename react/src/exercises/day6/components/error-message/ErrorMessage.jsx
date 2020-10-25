import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  const showMessage = !!message;

  return (
    showMessage && (
      <div className={styles.errorMessage} data-testid="errorMessage">
        {message}
      </div>
    )
  );
};

ErrorMessage.propTypes = { message: PropTypes.any };

ErrorMessage.defaultProps = { message: "" };

export default ErrorMessage;
