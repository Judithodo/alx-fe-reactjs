// import React from 'react';

// function MainContent() {
//   return (
//     <main style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
//       <h2 style={{ color: 'darkslategray' }}>Explore the Best Cities</h2>
//       <p style={{ fontSize: '18px', color: 'gray' }}>
//         Discover amazing places to visit, from vibrant cities to tranquil towns.
//       </p>
//       <p style={{ fontSize: '18px', color: 'gray' }}>
//         I love to visit New York, Paris, and Tokyo.
//       </p>
//     </main>
//   );
// }

// export default MainContent;

import React from 'react';

function MainContent() {
  return (
    <main style={{
      backgroundColor: '#f0f0f0', 
      padding: '40px', 
      textAlign: 'center', 
      borderRadius: '8px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      marginTop: '20px'
    }}>
      <h2 style={{
        color: '#333', 
        fontSize: '36px', 
        marginBottom: '20px', 
        fontFamily: 'Arial, sans-serif'
      }}>
        Explore the Best Cities
      </h2>
      <p style={{
        fontSize: '18px', 
        color: 'gray', 
        lineHeight: '1.6', 
        fontFamily: 'Verdana, Geneva, sans-serif', 
        marginBottom: '20px'
      }}>
        Discover amazing places to visit, from vibrant cities to tranquil towns.
      </p>
      <p style={{
        fontSize: '20px', 
        color: '#333', 
        fontWeight: 'bold', 
        fontFamily: 'Georgia, serif'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
