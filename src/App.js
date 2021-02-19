import React, { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = event => {
    event.preventDefault();
    setTodos([...todos, event.target.elements.todoInput.value]);
    event.target.elements.todoInput.value = '';
  };
  const deleteTodoHandler = todoToDelete => {
    setTodos([...todos.filter(todo => todo !== todoToDelete)]);
  };

  const todosList = todos.map((todo, index) => (
    <TodoItem key={index} value={todo} delete={() => deleteTodoHandler(todo)} />
  ));
  return (
    <div className="container">
      <header>
        <h1 className="text-2xl">Todo App</h1>
      </header>
      <div>{todosList}</div>
      <form onSubmit={addTodoHandler}>
        <input id="todoInput" type="text" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default App;
