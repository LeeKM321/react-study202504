import React, { useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';
import Home from './components/SideEffect/Home/Home';

const App = () => {
  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 서버로 로그인을 요청하는 함수. (나중에 fetch등을 통해 실제로 요청이 들어갈 겁니다.)
  const loginHandler = (email, password) => {
    if (email === 'abc1234@naver.com' && password === 'aaa1111') {
      // 로그인 성공
      setIsLoggedIn(true);
      // 브라우저가 제공하는 저장소 localStorage.
      // 새로고침이나 브라우저를 종료해도 데이터가 계속 유지됨.
      localStorage.setItem('login-flag', '1');
    } else {
      alert('로그인 실패입니다.');
    }
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('login-flag');
  };

  // 화면이 렌더링 될 때 localStorage를 확인해서
  // login-flag라는 데이터 있다면 로그인 상태를 변경하자
  const storedLoginFlag = localStorage.getItem('login-flag');
  if (storedLoginFlag === '1') {
    setIsLoggedIn(true);
  }

  return (
    <>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <main style={{ marginTop: '7rem' }}>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;
