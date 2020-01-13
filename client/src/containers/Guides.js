import React, { Component } from 'react'
import GuideCard from '../components/GuideCard'

class Guides extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            items: [],
            item: [],
            isLoaded: false,
            readNow: [],
            id: "",
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/guides', {
            headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(res => {
            console.log(res)
            return res.json()})
        .then(json => {
            this.setState({
            isLoaded: true,
            items: json,
        
            })
        })
    }


render() {
        return (
        <div>
        <ul>
            {this.state.items.map(item => (
                <GuideCard id={item.id}  key={item.id} url={item.url} name={item.name}/>
            ))}
        </ul>
        </div>
        )
    }}

export default Guides