import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserInfo.css';

const UserInfo = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <li className={`UserInfo md:col-span-6 mb-4 flex ${props.info ? '' : 'opacity-50'}`} data-testid="UserInfo">
      <FontAwesomeIcon icon={props.mark} className="mr-3 text-2xl" />
      <p className={`text-base ${darkMode ? 'text-gray' : ''}`}>{props.info ? props.info : 'Not Available'}</p>
    </li>
  );
};

UserInfo.propTypes = {};

UserInfo.defaultProps = {};

export default UserInfo;
