import React from 'react';

const TodoItem = props => {
  return (
    <div>
      <p>{props.value}</p>
      <button onClick={props.delete}>x</button>
    </div>
  );
};

export default TodoItem;
