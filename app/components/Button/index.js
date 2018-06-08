import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss'
class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      isClick: false,
      textBtn: false,
    }
    this.handlerClick = this.handlerClick.bind(this)
  }
  handlerClick() {
    this.setState({
      isClick: !this.state.isClick,
      textBtn: !this.state.textBtn,
    })
  }
  render() {
    const { text } = this.props;
    const { isClick, textBtn } = this.state;
    return (
      <button className="button" onClick={this.handlerClick} style={{ backgroundColor: isClick ? 'green' : 'yellow', height: 100 }}>
        { textBtn ? 'liho' : text }
      </button>);
  }
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
};


export default Button;
