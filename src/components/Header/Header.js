import React, {useContext} from 'react';
import Switch from '../Switch/Switch';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <header className="Header flex justify-between items-center py-6" data-testid="Header">
      <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>devfinder</h1>
      <Switch />
    </header>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
