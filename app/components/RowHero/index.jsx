import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

class RowHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handlerClick = this.handlerClick.bind(this);
  }
  

  handlerClick() {
        const { name } = this.props.hero;
        const isOpen = !this.state.isOpen;
        this.setState({
            isOpen,
        });
        this.props.isOpen(name, isOpen);
      }
  render() {
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
      heroes: state.items.results,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
  };
};

export default connect(mapStateToProps)(RowHero);