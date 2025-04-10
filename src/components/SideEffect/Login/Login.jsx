import React, { useEffect, useReducer, useState } from 'react';
import styles from './Login.module.css';
import Button from '../../../UI/Button';
import Card from '../../../UI/Card';

// 초기 상태 설정
const initialLoginState = {
  enteredEmail: '',
  enteredPw: '',
  emailIsValid: null,
  pwIsValid: null,
};

// 리듀서 함수 선언
/*
   이 컴포넌트에서 사용하는 모든 상태와 상태 변경을 중앙 제어하는 함수.
   컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하기 때문에
   컴포넌트 바깥쪽에 선언하는 것이 일반적입니다.
   
   param1 - state: 변경 전의 상태값
   param2 - action: dispatch함수(상태 변경 등의 행동)가 전달한 상태 변경 객체
   return: 관리할 상태값들을 반환
 */
const loginReducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL_INPUT':
      return {
        ...state,
        enteredEmail: action.val,
      };
    case 'PASSWORD_INPUT':
      return {
        ...state,
        enteredPw: action.val,
      };
    case 'EMAIL_VALID':
      return {
        ...state,
        emailIsValid: state.enteredEmail.includes('@'),
      };
    case 'PASSWORD_VALID':
      return {
        ...state,
        pwIsValid: state.enteredPw.trim().length > 6,
      };

    default:
      return state;
  }
};

const Login = ({ onLogin }) => {
  // login reducer 사용하기
  /*
     param1 - reducer function: 위에서 만든 리듀서 함수
     param2 - initial state: 초기 상태값
     return1 - 로그인 관련 상태변수
     return2 - dispatch함수: 상태를 변경할 수 있는 함수
   */
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // 디스트럭쳐링으로 상태값 추출해서 사용.
  const { enteredEmail, enteredPw, emailIsValid, pwIsValid } = loginState;

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'EMAIL_VALID' });
      dispatch({ type: 'PASSWORD_VALID' });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPw]);

  // 이메일이 변경될 때마다 실행할 핸들러
  const emailChangeHandler = (e) => {
    // reducer의 상태 변경은 dispatch 함수를 통해서 처리
    // dispatch함수의 매개값 객체의 key는 정해진 것이 아닌, reducer 함수에서 구분하기 위해 붙여주는 이름.
    // 프로퍼티의 key와 value는 자유롭게 줄 수 있습니다. (정해진 게 아님!)
    dispatch({
      type: 'EMAIL_INPUT',
      val: e.target.value,
    });
  };

  // 비밀번호가 변경될 때마다 실행할 핸들러
  const passwordChangeHandler = (e) => {
    dispatch({
      type: 'PASSWORD_INPUT',
      val: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
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
            // onBlur={validateEmailHandler} // blur는 focus의 반대
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
            // onBlur={validatePasswordHandler}
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
