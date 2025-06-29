import React, { useEffect, useState } from 'react'

function Counter1() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
      document.title=`title change ${count}` 
            
    })

  return (
    <div>
      <p>count {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Counter1
