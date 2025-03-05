

// UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import the UserContext

const UserDetails = () => {
  // Consume user data from the UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default UserDetails;
