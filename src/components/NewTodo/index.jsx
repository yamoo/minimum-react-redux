import React from 'react';

const NewTodo = ({ value, update, add }) => (
  <div>
    <input value={value} onChange={e => update(e.target.value)} />
    <button onClick={add}>Add</button>
  </div>
);

export default NewTodo;

