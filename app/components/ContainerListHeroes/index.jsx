import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import ListHeroes from '../ListHeroes';
import * as actions from '../../redux/actions';

class ContainerListHeroes extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props)
    this.props.fetchData('https://swapi.co/api/people/')
  }

  render() {
    return (
      <React.Fragment>
        <h1>Heroes</h1>
        <ListHeroes  />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      heroes: state.items.results,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(actions.itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerListHeroes);

