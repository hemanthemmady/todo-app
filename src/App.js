import React, { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState(['Todo 1']);
  const addTodoHandler = event => {
    event.preventDefault();
    const todo = event.target.elements.todoInput.value;
    todo && setTodos([...todos, todo]);
    console.log(event.target.elements);
    event.target.elements.todoInput.value = '';
  };
  const deleteTodoHandler = todoToDelete => {
    setTodos([...todos.filter(todo => todo !== todoToDelete)]);
  };

  const todosList = todos.map((todo, index) => (
    <TodoItem key={index} value={todo} delete={() => deleteTodoHandler(todo)} />
  ));
  return (
    <div className="mx-auto max-w-md mt-8 h-96 rounded shadow-lg flex flex-col">
      <header className="flex justify-center content-center pt-3 pb-5">
        <h1 className="text-2xl">Todo App</h1>
      </header>
      <div className="flex-grow max-h-screen">{todosList}</div>
      <form className="flex" onSubmit={addTodoHandler}>
        <input
          id="todoInput"
          type="text"
          className="flex-grow m-1 rounded border-2 border-gray-700 focus:outline-none focus:ring focus:border-green-700"
          placeholder="Add task..."
        />
        <button
          type="submit"
          id="todoSubmit"
          className="p-2 m-1 rounded shadow bg-gray-700 text-white hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
