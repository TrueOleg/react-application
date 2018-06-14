import React from 'react';
import axios from 'axios';

class ListHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heroes: [] };
  }
  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then((res) => {
        this.setState({ heroes: res.data.results });
        console.log('heroes', this.state.heroes);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <ul>
        {this.state.heroes.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
    )
  }
}

export default ListHeroes;
