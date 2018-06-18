import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handlerClick = this.handlerClick.bind(this);
  }
  

  handlerClick() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
      }
  render() {
      console.log('props', this.props)
    const { hero } = this.props;
    const isOpen = this.state.isOpen;
    return (<React.Fragment>
              <li onClick={this.handlerClick}>{hero.name}
              {isOpen ? <ul>
                          <li>{hero.height}</li>
                          <li>{hero.mass}</li>    
                        </ul>
                      : null}
                
              </li>
              
            </React.Fragment>)
  }
}
export default Input;