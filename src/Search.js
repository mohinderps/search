import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Search">
        <input className="SearchField"
          type="text"
          placeholder="Type to Search..."
          value={this.props.searchTerm}
          onChange={this.props.searchList}/>
      </div>
    )
  }
}

export default Search;
