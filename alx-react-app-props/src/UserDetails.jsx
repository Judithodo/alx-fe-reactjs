// src/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';  // Import UserContext

function UserDetails() {
  // Use the useContext hook to get the user data directly from the context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
