import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
import { ThemeContext } from "../ThemeProvider/ThemeProvider";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


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
    <button className={`Switch ${darkMode ? 'text-gray' : ''}`} data-testid="Switch" onClick={handleClick}>
      <span className="mr-2">{darkMode ? "Light" : "Dark"}</span>
      {/* {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />} */}
    </button>
  );
};

Switch.propTypes = {};

Switch.defaultProps = {};

export default Switch;
