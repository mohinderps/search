import React from 'react';
import Result from './Result';

const Results = (props) => {
  const elements = props.results.map((element) => (
    <Result number={element.number}
      name={element.name}
      symbol={element.symbol}
      mass={element.mass}
      type={element.type}
      key={element.number}/>
  ));

  return (
    <div className="Results">
      {elements}
    </div>
  )
}

export default Results;
