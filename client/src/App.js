import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './views/css/styles.css'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Guides from './containers/Guides'
import NavbarPage from './components/Navbar'
import Guide from './containers/Guide'


class App extends Component {


  // componentDidMount() {
  //  this.props.getData()
  // }

  render() {
    return (
      <Router>
        <div>
          <NavbarPage />
          <Home />
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
// Name: <a href={"/api/guides/" + item.id}>{item.name}</a>
