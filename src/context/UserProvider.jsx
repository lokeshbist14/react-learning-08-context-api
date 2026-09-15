import React, { useState } from 'react'
import UserContext from './UserContext';

function UserProvider({ children }) {
  // A Provider supplies context data to the components inside it using the value prop.
    const [user, setUser] = useState("Hari");
    const [age, setAge] = useState(22);

  return (
    <div>
    < UserContext.Provider value={{user, setUser, age, setAge}}>
    {children}
    </UserContext.Provider>
    </div>
  )
}

export default UserProvider;