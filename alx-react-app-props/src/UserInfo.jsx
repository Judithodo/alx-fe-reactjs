// src/UserInfo.jsx
import React, { useContext } from 'react';
import UserDetails from './UserDetails';  // Import UserDetails component
import UserContext from './UserContext';  // Import UserContext

function UserInfo() {
  // Use the useContext hook to consume userData from UserContext
  const userData = useContext(UserContext);

  return <UserDetails userData={userData} />;
}

export default UserInfo;
