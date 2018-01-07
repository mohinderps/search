import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Results from './Results';
import data from './Data';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Results results={this.props.elements}/>
      </div>
    );
  }
}

App.defaultProps = {
  elements: data
}

export default App;
