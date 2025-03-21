
import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', width: '250px' }}>
      <h2 style={{ color: 'blue', fontSize: '20px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '14px', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
