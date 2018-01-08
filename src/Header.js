import React from 'react';
import Search from './Search';

const Header = (props) => (
  <div className="Header">
    <Search searchTerm={props.searchTerm} searchList={props.searchList}/>
  </div>
);

export default Header;
