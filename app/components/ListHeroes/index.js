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
        this.setState({ results: data.results });
        console.log('results', this.state.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <ul>
        {this.state.results.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
    )
  }
}

export default ListHeroes;
