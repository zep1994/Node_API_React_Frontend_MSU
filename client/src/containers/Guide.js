// import React, { Component } from 'react'
// import GuideCard from '../components/GuideCard'
// import { Link } from 'react-router-dom'


// const BASE_URL = 'http://localhost:3001/api/guides'
// const SITE_ID = '?site_id=8488'
// const KEY = '&key=0b8da796b00334ae3471f60e6a10e8c6'
// const DEFAULT_NAME = 'Literary Theory'
// const DEFAULT_ID = "577970"

// class Guide extends Component {
//     // constructor(props) {
//     //     super(props)
        
//     //     this.state = {
//     //         item: [],
//     //         isLoaded: false,
//     //     }
//     }

    

//     // componentDidUpdate() {
//     //     fetch(`${BASE_URL}/${this.props.id}${SITE_ID}${KEY}`, {
//     //         headers : {
//     //         'Content-Type': 'application/json',
//     //         'Accept': 'application/json'
//     //     }
//     //     })
//     //     .then(res => {
//     //         console.log(res)
//     //         return res.json()})
//     //     .then(json => {
//     //         this.setState({
//     //             isLoaded: true,
//     //             item: json
//     //         })
//     //     })
//     // }
    
    
 
//     render() {
//         return (
//             <div className="GuidesContainer">
//                 {this.state.items((item) => (
//                     <Link to={'/guides/:id'} component={GuideCard}><GuideCard id={item.id} name={item.id} /></Link>
//                 ))}
//             </div>
//         )
//     }
// }


// export default Guide