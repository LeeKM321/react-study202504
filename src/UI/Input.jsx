import React from 'react';
import styles from './Input.module.scss';

const Input = ({ input, label }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
