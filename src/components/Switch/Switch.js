import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
import { ThemeContext } from "../ThemeProvider/ThemeProvider";


const Switch = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <button className="Switch" data-testid="Switch" onClick={handleClick}>
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

Switch.propTypes = {};

Switch.defaultProps = {};

export default Switch;
