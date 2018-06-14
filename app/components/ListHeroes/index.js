import React from 'react';

class ListHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allHeroes: [] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.state.allHeroes) {
      this.state.allHeroes = nextProps;
    }
  }
  render() {
    const { heroes } = this.state.allHeroes;
    return heroes.map((item) => {
      return (<li key={item.name}>{item.name}</li>)
    });
  }
}

export default ListHeroes;
