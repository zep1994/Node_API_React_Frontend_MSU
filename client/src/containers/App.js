import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../views/css/styles.css'
import '../App.css';
import Home from '../components/Home'
import About from '../components/About'
import Guides from '../containers/Guides';

class App extends Component {
  
  // constructor(props) {
  //   super(props) 
  //   this.state = { data: "" }
  // }

  // callApi() {
  //   fetch("https://lgapi-us.libapps.com/1.1/guides/577970?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6")
  //   .then(res => res.json())
  //   .then(res => this.setState({ data: JSON.stringify(res) }))
  //   .catch(err => console.log(err))
  // }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <Router>
        <div className="App">
      
          <Switch>
            <Route exact path = '/' component={Home} />
            <Route exact path = '/about' component={About} />
            <Route exact path = '/guides' component={Guides} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  }

export default App;
