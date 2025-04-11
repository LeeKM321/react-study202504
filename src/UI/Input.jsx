import React from 'react';
import styles from './Input.module.scss';

const Input = ({ input, label, onAdd }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} onChange={(e) => onAdd(e.target.value)} />
    </div>
  );
};

export default Input;
