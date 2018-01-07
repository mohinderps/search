import React from 'react';
import Icon from './Icon';
import Title from './Title';

const Result = (props) => (
  <div className="Result">
    <Icon number={props.number} name={props.name} symbol={props.symbol} mass={props.mass} type={props.type}/>
    <Title title={props.name}/>
  </div>
);

export default Result;
