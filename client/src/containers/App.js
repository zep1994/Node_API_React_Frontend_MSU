import React, { Component } from 'react';
import '../App.css';

class App extends Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hello</h2>
        </header>
      </div>
    );
  }
  
  }

export default App;
