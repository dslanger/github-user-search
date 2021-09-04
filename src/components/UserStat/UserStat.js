import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './UserStat.css';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

const UserStat = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <p className="UserStat text-center md:col-span-4 lg:text-left" data-testid="UserStat">
        <span className={`text-base ${darkMode ? 'text-gray' : ''}`}>{props.name}</span><br />
        <strong className={`text-xl ${darkMode ? 'text-offWhite' : 'text-black'}`}>{props.stat}</strong>
    </p>
  );
};

UserStat.propTypes = {};

UserStat.defaultProps = {};

export default UserStat;
