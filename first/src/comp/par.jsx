import React from 'react';
import Child1 from './child1';

function Par() {
    let ms="Hello from Parent";
    let age=20;
  return (
    <div>
      <Child1 m={ms} a={age}/>
    </div>
  )
}

export default Par
