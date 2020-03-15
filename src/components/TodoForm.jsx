import React, { useState } from 'react'

function TodoForm( props ) {
  // console.log(props)
  const [value, setValue] = useState("");
  // console.log(value)
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;           // check for null
    props.addTodo(value);
    setValue("");                 // clear value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
export default TodoForm;