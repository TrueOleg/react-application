import React from 'react';
import { connect } from 'react-redux';

import RowHero from '../RowHero';
import * as actions from '../../redux/actions';

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
    this.props.addName(name);
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

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (name) => dispatch(actions.addName(name))
  }
}

export default connect(null, mapDispatchToProps)(ListHeroes);
