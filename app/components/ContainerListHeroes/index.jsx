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
    // axios.get('https://swapi.co/api/people/')
    //   .then((res) => {
    //     this.setState({ heroes: res.data.results });
    //     console.log('heroes', this.state.heroes);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  render() {
    return (
      // <React.Fragment>
      //   {/* <h1>Heroes</h1>
      //   <ListHeroes  /> */}
      // </React.Fragment>
      <p>44444</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      heroes: state.results,
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

