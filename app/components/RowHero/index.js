import React from 'react';

class RowHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handlerClick = this.handlerClick.bind(this);
  }
  

  handlerClick() {
        const { name } = this.props.hero;
        console.log('name', name)
        const value = !this.state.isOpen;
        this.setState({
            isOpen: !this.state.isOpen,
        })
        this.props.isOpen(name, value)
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
export default RowHero;