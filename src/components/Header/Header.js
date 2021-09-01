import React from 'react';
import Switch from '../Switch/Switch';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
  <header className="Header flex justify-between items-center p-6" data-testid="Header">
    <h1 className="text-xl font-bold">devfinder</h1>
    <Switch />
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
