import React from 'react';
import PropTypes from 'prop-types';
import Clock from '../Clock';

class Container extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="button" style={{ backgroundColor: 'red', height: 100 }}>
        { text }
        <Clock />
      </div>);
  }
}

Container.propTypes = {
  text: PropTypes.string.isRequired,
};


export default Container;
