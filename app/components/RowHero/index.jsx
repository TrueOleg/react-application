import React from 'react';
import { connect } from 'react-redux';

class RowHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handlerClick = this.handlerClick.bind(this);
  }
  

  handlerClick() {
        const { name } = this.props.hero;
        // console.log('name', name)
        const isOpen = !this.state.isOpen;
        this.setState({
            isOpen,
        });
        this.props.isOpen(name, isOpen);
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
              
            </React.Fragment>);
  }
}

const mapStateToProps = (state) => {
  return {
      heroes: state.items.results
  }
}


export default connect(mapStateToProps)(RowHero);