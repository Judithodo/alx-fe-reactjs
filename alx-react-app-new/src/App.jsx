// src/App.jsx
import React, { useState } from 'react';  
import WelcomeMessage from './components/WelcomeMessage';  
import UserProfile from './components/UserProfile';  

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Welcome to the React App</h1>

      {/* Example of displaying user profiles */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Enjoys coding and playing video games" 
      />

      {/* The count button example */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      </div>

      {/* Welcome message */}
      <WelcomeMessage message="Hello, World!" />

    </>
  );
};

export default App;

