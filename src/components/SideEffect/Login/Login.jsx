import React from 'react';
import styles from './Login.module.css';
import Button from '../../../UI/Button';
import Card from '../../../UI/Card';

const Login = () => {
  return (
    <Card className={styles.login}>
      <form>
        <div className={`${styles.control} `}>
          <label htmlFor='email'>E-Mail</label>
          <input type='email' id='email' />
        </div>
        <div className={`${styles.control} `}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div className={styles.actions}>
          <Button type='submit' className={styles.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
