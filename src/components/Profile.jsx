
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser, age, setAge } = useContext(UserContext);
  // useContext() is a React Hook used to access data from a Context directly inside a component.

  return (
    <div>
      <h2>Profile</h2>
      <p>Hello, {user}!</p>
      <p>My age is {age}</p>


      <button onClick={() => setAge(age + 1)}>
        Increase
      </button>

      <button onClick={() => setUser("Shyam")}>
        Change Name
      </button>
    </div>
  );
}

export default Profile;