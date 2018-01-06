import React from 'react';
import './Element.css';

const Element = (props) => (
  <div className="element">
    <div className="element-details" data-type={props.type}>
      <div className="number">{props.number}</div>
      <div className="symbol">{props.symbol}</div>
      <div className="name">{props.name}</div>
      {props.mass && <div className="mass">{props.mass}</div>}
    </div>
    <div className="element-name">
      {props.name}
    </div>
  </div>
);

export default Element;
