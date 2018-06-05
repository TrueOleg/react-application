import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  console.log(props);
  return (
    <button>
      {props.text}
    </button>);
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
