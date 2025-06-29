import React, { useEffect, useState } from 'react';

function Time() {
    const[sec,setsec]=useState(0)
    useEffect(()=>{
        const intervel=setInterval(()=>{
            setsec((i)=>i+1);
        },1000)
        return()=>{
            clearInterval(intervel);
        }
    },[])
      return (
    <div>
      <h3>Timer:{sec}Seconds</h3>
    </div>
  )
}

export default Time
