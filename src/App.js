import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Results from './Results';
import data from './Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.searchList = this.searchList.bind(this);
  }

  searchList(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header searchTerm={this.state.value} searchList={this.searchList}/>
        <Results results={this.props.elements.filter(element => element.name.toLowerCase().includes(this.state.value.toLowerCase()))}/>
      </div>
    );
  }
}

App.defaultProps = {
  elements: data
}

export default App;
