import React from 'react';
// import './Button.css';

// const Button = ({ children, type, className, onClick }) => {
//   // ??: 널 병합 연산자 -> 좌항의 변수가 null or undefined일 경우 우항의 값으로 대체.
//   // null or undefined가 아니라면? -> 원래의 변수값으로 적용.
//   const cn = `button ${className ?? ''}`;

//   return (
//     <button type={type} className={cn} onClick={onClick}>
//       {children}
//     </button>
//   );
// };
import styled from 'styled-components';

// styled-components를 활용하여 리액트 컴포넌트를 생성.
// 생성과 동시에 요소에 스타일을 문자열로 지정.
// html에서 제공하는 type, onClick 속성은 자동으로 처리해 줍니다.
// 커스텀 props 같은 경우 템플릿 리터럴을 통해 동적으로 처리가 가능합니다.
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  ${(props) => props.className && `${props.className}`}

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
