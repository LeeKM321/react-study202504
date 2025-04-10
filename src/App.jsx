import React, { useContext, useEffect, useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';
import Home from './components/SideEffect/Home/Home';
import { AuthContext } from './components/SideEffect/store/AuthContextProvider';

const App = () => {
  const { isLoggedIn, changeLoginStatus } = useContext(AuthContext);

  // 서버로 로그인을 요청하는 함수. (나중에 fetch등을 통해 실제로 요청이 들어갈 겁니다.)
  const loginHandler = (email, password) => {
    if (email === 'abc1234@naver.com' && password === 'aaa1111') {
      // 로그인 성공
      changeLoginStatus(true);
      // 브라우저가 제공하는 저장소 localStorage.
      // 새로고침이나 브라우저를 종료해도 데이터가 계속 유지됨.
      localStorage.setItem('login-flag', '1');
    } else {
      alert('로그인 실패입니다.');
    }
  };

  const logoutHandler = () => {
    changeLoginStatus(false);
    localStorage.removeItem('login-flag');
  };

  useEffect(() => {
    // 이 useEffect의 콜백은 최초 렌더링 시 딱 한번만 동작해도 되는 로직.
    console.log('useEffect Called!');

    // 화면이 렌더링 될 때 localStorage를 확인해서
    // login-flag라는 데이터 있다면 로그인 상태를 변경하자
    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') {
      changeLoginStatus(true);
    }
  }, []);
  // 의존성 배열: useEffect가 실행되어야 하는 트리거 변수.
  // 배열 안에 상태 변수를 지정하면, 해당 변수의 값이 변할 때마다 useEffect가 실행되고,
  // 만약 빈 배열을 전달하면 최초 렌더링 과정에서 단 한번만 실행.

  return (
    // 컨텍스트를 생성했다면 전역 상태를 사용하고자 하는 컴포넌트를 Provider로 감싸줍니다.
    <>
      <MainHeader onLogout={logoutHandler} />
      <main style={{ marginTop: '7rem' }}>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;
