import React from "react";
import UserProvider from "./context/UserProvider";
import Profile from "./components/Profile";
import PropsExample from "./components/PropsExample";
import Dashboard from "./components/Dashboard";
import ThemeProvider from "./context/ThemeProvider";
import ThemeExample from "./components/ThemeExample";

function App() {
  return (
    <UserProvider>
      <h1>Context API Example</h1>
      <p>Context API share data so components can access it directly.</p>
      <p>
        Context API is used when data needs to be shared across many components or
        multiple levels of the component tree, and passing props through every
        level would become inconvenient.
      </p>
      <br />

      <Profile />
      <br />

      {/* Props-Pass data manually from parent to child. */}
      <PropsExample />
      <br />

      <Dashboard />
      <br />

      <ThemeProvider>
        <ThemeExample />
      </ThemeProvider>

    </UserProvider>
  );
}

export default App;
