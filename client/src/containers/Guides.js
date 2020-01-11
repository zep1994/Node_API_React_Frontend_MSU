import React, { Component } from 'react'
import {connect} from 'react-redux'
import GuideCard from '../components/GuideCard'
import { getData } from '../actions/data_action'


class Guides extends Component {
    
    render() {
        return (
            <div className="GuidesContainer">
                {this.props.guides.map(guide => <GuideCard key={guide.id} guide={guide} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        guides: state.guides
    })
}

export default connect(mapStateToProps, { getData })(Guides)