import React from 'react';
import styles from './styles.css';

const Todo = ({ value, onRemove }) => (
  <div className={styles.self}>
    <span>{value}</span>
    <button className={styles.button} onClick={onRemove}>Remove</button>
  </div>
);

export default Todo;
