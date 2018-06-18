import React from 'react';
import RowHero from '../RowHero';

class ListHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      stateOfHeroes: {},
      input: ''
     };
     
    this.isOpen = this.isOpen.bind(this);
    this.isChange = this.isChange.bind(this);
    this.isClear = this.isClear.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    
    let stateOfHeroes = {};
    nextProps.heroes.forEach(hero => {
      stateOfHeroes[hero.name] = false;
    });
    this.setState({stateOfHeroes})

  }

  isOpen(name, value) {
    this.setState({ stateOfHeroes: {...this.state.stateOfHeroes, [name]: value} })
  }

  isChange(e) {
    console.log(e.target);
    this.setState({ input: e.target.value })
  }

  isClear(e) {
    this.setState({ input: ''})

  }

  render() {
    // console.log('stateOfHeroes', this.state);
    console.log('state', this.state.input)
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
        <input onChange={this.isChange} onBlur={this.isClear} value={this.state.input} type='text' />
        <p>{this.state.input}</p>
      </div>  
    );
  }
}
export default ListHeroes;
