import React from "react";

function PropsExample() {
  const user = "Lokesh";

  return (
    <div>
      <h2>Props Example</h2>
      <p>Data is passed manually from parent to child.</p>
      <User name={user} />
    </div>
  );
}

function User({ name }) {
  return <p>Hello, {name}!</p>;
}

export default PropsExample;