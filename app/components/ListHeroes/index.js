import React from 'react';
import axios from 'axios';

class ListHeroes extends React.Component {
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://swapi.co/api/people/',
    })
      .then((response) => { console.log(response) });
  }
  render() {
    return (<div />);
  }
}

export default ListHeroes;
