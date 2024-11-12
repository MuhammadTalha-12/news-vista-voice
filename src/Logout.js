import React from 'react';

function Logout({ handleLogout }) {
  return (
    <div>
      <h2>Welcome Back!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
