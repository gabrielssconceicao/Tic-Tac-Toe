/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Square.css';
import PropTypes from 'prop-types';

export function Square({ onClick, value }) {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
}

Square.defaultProps = {
  value: '',
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};
