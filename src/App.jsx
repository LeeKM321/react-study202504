import React from 'react';
import './App.css';
import Hello from './components/Example';
import Greet from './components/Greet';
import Bye from './components/Bye';
import ExpenseItem from './components/expenses/ExpenseItem';

function App() {
  /*
    jsx : 리액트에서 사용하는 특수한 js문법, 태그를 그대로 쓰면 알아서 변환
          html처럼 보이지만, 실제 html은 아닙니다.

    - 규칙 :
    1. return안에 있는 태그는 반드시 하나의 태그로 묶여야 함.
    2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
       <></>: React.Fragment와 동일한 태그
    5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
  */

  // const $h1 = React.createElement('h1', null, '안뇽 React!!'); -> fm
  const subject = 'Vanilla Javascript!!';

  return (
    <>
      <ExpenseItem />
    </>
  );
}

export default App;
