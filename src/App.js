import React, { useState } from "react";
import "./App.css";
import TodoForm from './components/TodoForm'
import Todo     from './components/Todo'
import Counter     from './components/Counter'

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    let newTodo = {text, isCompleted: false}
    const newTodos = [...todos,  newTodo ];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // console.log(todos)
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        
        ))}
        <TodoForm addTodo={addTodo} />
        <Counter 
          todos={todos}
        />

      </div>
    </div>
  );
}

export default App;

