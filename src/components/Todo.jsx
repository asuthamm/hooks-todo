import React from 'react';

      // function Todo({ todo, index, completeTodo, removeTodo }) {
  function Todo( props ) {
  let { todo, index, completeTodo, removeTodo } = props
  // console.log(props)
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}
export default Todo;