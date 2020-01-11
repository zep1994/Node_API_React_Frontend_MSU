import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getData } from '../../actions/data_action'


class Data extends Component {

    render() {
        return {

        }
    }
}

const mapStateToProps = (state) => {
    return ({
        games: state.games
    })
}

export default connect(mapStateToProps, { getData })(Data)