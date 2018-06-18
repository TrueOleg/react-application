import React from 'react';
import axios from 'axios';
import ListHeroes from '../ListHeroes';

class ContainerListHeroes extends React.Component {
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
      <React.Fragment>
        <h1>Heroes</h1>
        <ListHeroes heroes={this.state.heroes} />
      </React.Fragment>
    )
  }
}

export default ContainerListHeroes;
