import React, { Component } from 'react';
import './App.css';
import Element from './Element';
import data from './Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.data = data;
  }

  render() {
    const elements = this.data.map((element) => (
      <Element number={element.number}
        name={element.name}
        symbol={element.symbol}
        mass={element.mass}
        type={element.type}
        key={element.number}/>
    ))
    return (
      <div className="container">
        {elements}
      </div>
    );
  }
}

export default App;
