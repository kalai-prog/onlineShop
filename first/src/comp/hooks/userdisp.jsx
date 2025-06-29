import React, { createContext, useContext } from 'react';

const context=createContext();
function UserDisp() {

  return (
    <div>
      <context.Provider value={"Hello"}>
    <Sample/>
      </context.Provider>
    </div>
  )
}

export default UserDisp

function Sample(){
    const user=useContext(context)
    return <p>User Logged {user}</p>
}