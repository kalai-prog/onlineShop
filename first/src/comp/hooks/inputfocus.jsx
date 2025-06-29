import React, { useRef } from 'react';

function InputFocus() {
    const input=useRef(null);
    
  return (
    <div>
    <input type='text' ref={input}/>
    <button onClick={()=>{input.current.focus()}}>Click</button>
    </div>
  )
}

export default InputFocus
