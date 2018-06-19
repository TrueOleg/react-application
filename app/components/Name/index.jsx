import React from 'react';

import {connect} from 'react-redux';

class Name extends React.Component {

    render() {
        return (<p>{}</p>)
      }
}

const mapStateToProps = (state) => {
    return {
        names: state.namesHeroes
    }
}

export default connect(mapStateToProps)(Name);