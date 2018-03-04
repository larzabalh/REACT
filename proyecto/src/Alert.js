import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Alert = ({ children,type, onClick}) => (
    <div className={`alert alert-${type}`} role="alert" onClick={onClick}>
      {children}
    </div>
)

Alert.propTypes={
type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    ]),
}

Alert.defaultProps = {
  type: 'primary'
};

export default Alert