import React, { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(77);

  const handleAddClick = () => {
    setCount( count+1 )
  }

  // const handleMinusClick = () => {   // showing 2 ways to do it
  //   setCount( count-1 )
  // }

  return (
    <div>
    <p>Counter: {count} </p>
    <button onClick={handleAddClick}>+1</button>
    <button onClick={() => {setCount( count-1 )}}>-1</button>
  </div>
  );
}
export default Counter;