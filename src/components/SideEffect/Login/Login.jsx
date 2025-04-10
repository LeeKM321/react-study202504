import React, { useState } from 'react';
import styles from './Login.module.css';
import Button from '../../../UI/Button';
import Card from '../../../UI/Card';

const Login = ({ onLogin }) => {
  // 이메일 입력값 상태 관리
  const [enteredEmail, setEnteredEmail] = useState('');

  // 비밀번호 입력값 상태 관리
  const [enteredPw, setEnteredPw] = useState('');

  // 이메일 입력이 유효한지를 상태 관리
  const [emailIsValid, setEmailIsValid] = useState();

  // 비밀번호 입력도 유효한지를 상태 관리
  const [pwIsValid, setPwIsValid] = useState();

  // 이메일이 변경될 때마다 실행할 핸들러
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  // 비밀번호가 변경될 때마다 실행할 핸들러
  const passwordChangeHandler = (e) => {
    setEnteredPw(e.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPwIsValid(enteredPw.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit 동작함!');
    onLogin(enteredEmail, enteredPw);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${!emailIsValid ? styles.invalid : ''}`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler} // blur는 focus의 반대
          />
        </div>
        <div
          className={`${styles.control} ${!pwIsValid ? styles.invalid : ''}`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={enteredPw}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          {/* button은 disabled를 통해 비활성화 기능 구현. true면 비활성, false면 활성 */}
          <Button
            type='submit'
            className={styles.btn}
            disabled={!(emailIsValid && pwIsValid)}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
