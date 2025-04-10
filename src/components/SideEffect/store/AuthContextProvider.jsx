import React, { useState } from 'react';

// 로그인 상태를 전역적으로 관리하기 위해
// 컨텍스트를 선언합니다
export const AuthContext = React.createContext({
  isLoggedIn: false,
  // context에 함수도 담아서 제공할 수 있음.
  // 초기값은 함수의 형태다 라는 것만 명시
  changeLoginStatus: () => {},
});

// 전역 컨텍스트 내부에서 사용하는 프로퍼티를 상태값으로 관리하기 위한 전용 컴포넌트
// 화면에 렌더링 하기 위한 용도가 아니라, useState를 선언할 용도로 만드는 컴포넌트.
// 컨텍스트 선언부에는 useState를 못써요. 리액트 훅은 리액트 컴포넌트에서만 사용이 가능합니다.
const AuthContextProvider = (props) => {
  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // isLoggedIn 전역 상태 변수의 값을 변경할 용도로 제공할 함수
  const changeLoginStatus = (flag) => {
    setIsLoggedIn(flag);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, changeLoginStatus }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
