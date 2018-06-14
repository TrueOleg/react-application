import React from 'react';

class ListHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }

  render() {
    const { props } = this.props.heroes;
    const { heroes } = props.map((item) => {
      return (<li key={item.name} state={this.state.isOpen}>{item.name}</li>)
    });
    return (
      <ul>
        { heroes }
      </ul>
    );
  }
}
export default ListHeroes;
