import React from 'react';
import RowHero from '../RowHero';

class ListHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      stateOfHeroes: {}
     };
    this.isOpen = this.isOpen.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    
    let stateOfHeroes = {};
    nextProps.heroes.forEach(hero => {
      stateOfHeroes[hero.name] = false;
    });
    this.setState({stateOfHeroes})

  }

  isOpen(name, value) {
    // this.setState(this.state.stateOfHeroes.name = value)
 }

  render() {
    console.log('stateOfHeroes', this.state);
    const { heroes } = this.props;
    const comp = heroes.map((item) => {
      return (<RowHero hero={item} state={this.state.isOpen} isOpen={this.isOpen}/>)
    });
    return (
      <div>
        <ul>
          { comp }
        </ul>
        <button onClick={this.isOpen}></button>
      </div>  
    );
  }
}
export default ListHeroes;
