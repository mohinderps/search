import React from 'react';

const Icon = (props) => (
  <div className="Icon" data-type={props.type}>
    <div className="Number">{props.number}</div>
    <div className="Symbol">{props.symbol}</div>
    <div className="Name">{props.name}</div>
    {props.mass && <div className="Mass">{props.mass}</div>}
  </div>
);

export default Icon;
