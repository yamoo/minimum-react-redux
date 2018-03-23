import React from 'react';
import styles from './styles.css';
console.log(styles)
const NewTodo = ({ value, update, add }) => (
  <div className={styles.self}>
    <input className={styles.inputField} value={value} onChange={e => update(e.target.value)} />
    <button className={styles.button} onClick={add}>Add</button>
  </div>
);

export default NewTodo;
