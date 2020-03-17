// import React, { useState } from 'react'
import React, { useState, useEffect } from 'react';

console.log('before func')
function Counter() {

  const [count, setCount] = useState(77);
  const [users, setUsers] = useState([]);

  const handleAddClick = () => {
    setCount( count+1 )
  }

  useEffect(() => {
    console.log('useEffect...')
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data); // set users in state
      });
  }, []); // empty array because we only run once


  // const handleMinusClick = () => {   // showing 2 ways to do it
  //   setCount( count-1 )
  // }
  

  return (
    <div>
    <p>Counter: {count} </p>
    <button onClick={handleAddClick}>+1</button>
    <button onClick={() => {setCount( count-1 )}}>-1</button>

    {users.map(user => (
        <div key={user.id} className="card">
          <h5>{user.login}</h5>
        </div>
      ))}
  </div>
  );
}
export default Counter;