import React from 'react';

const Todo = ({ value, onRemove }) => (
  <div>
    <span>{value}</span>
    <button onClick={onRemove}>Remove</button>
  </div>
);

export default Todo;
