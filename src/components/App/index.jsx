import React from 'react';
import TodoList from 'containers/TodoList';
import AddTodo from 'containers/AddTodo';

const App = () => (
  <div>
    <h1>Todo List</h1>
    <AddTodo />
    <hr />
    <TodoList />
  </div>
);

export default App;
