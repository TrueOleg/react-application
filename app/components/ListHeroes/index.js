import React from 'react';
import axios from 'axios';

class ListHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then((res) => {
        const { data } = res;
        console.log('data', data);
        return data;
      })
      .then((data) => {
        this.setState({ results: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { results } = this.state.results;
    console.log('results', results);
    return (
      <ul>
        {results.map(item => <li>{item.name}</li>)}
      </ul>
    )
  }
}

export default ListHeroes;
