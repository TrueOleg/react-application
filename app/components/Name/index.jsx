import React from 'react';

import {connect} from 'react-redux';

class Name extends React.Component {

    render() {
        console.log('aaaaa', this.props.names)
        const { names } = this.props.names;
        const openHeroes = names.map((item) => {
            return (<li>{item}</li>)
        })
        return (<ul>{ openHeroes }</ul>)
      }
}

const mapStateToProps = (state) => {
    return {
        names: state.namesHeroes
    }
}


export default connect(mapStateToProps)(Name);