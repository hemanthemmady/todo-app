import React from 'react';

const TodoItem = props => {
  return (
    <div className="flex p-2 mr-1 ml-1 border-b-2">
      <p className="flex-grow truncate">{props.value}</p>
      <button
        className="flex items-center justify-center text-gray-700 hover:text-red-700 focus:outline-none"
        onClick={props.delete}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
