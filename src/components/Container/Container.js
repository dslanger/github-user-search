import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import './Container.css';

const Container = (props) => (
  <div className="container mx-auto max-w-6xl" data-testid="Container">
    {props.children}
  </div>
);

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
