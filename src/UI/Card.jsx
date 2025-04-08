import React from 'react';
import './Card.css';

/*
props: 자식 컴포넌트에게 전달할 데이터
props.children: 컴포넌트 혹은 html 요소들을 전달할 용도로 사용.
원하는 특정 요소들 or 컴포넌트들을 일괄적인 스타일을 적용한 박스 영역에 담아서 표현하고 싶을 때
Card 컴포넌트로 감싸서 children으로 전달한다.
Card는 전달받은 children을 .card가 적용된 div로 감싸서 렌더링 대상에 포함시킨다.
*/

const Card = ({ children, className }) => {
  const madeClass = 'card ' + className;
  return <div className={madeClass}>{children}</div>;
};

export default Card;
