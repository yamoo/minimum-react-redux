import React from 'react';
import TodoList from 'containers/TodoList';
import AddTodo from 'containers/AddTodo';
import styles from './styles.css';

const App = () => (
  <div className={styles.self}>
    <h1>Todo List</h1>
    <AddTodo />
    <hr />
    <TodoList />
  </div>
);

export default App;
