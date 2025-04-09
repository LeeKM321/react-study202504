import React from 'react';
import './Button.css';

const Button = ({ children, type, className, onClick }) => {
  // ??: 널 병합 연산자 -> 좌항의 변수가 null or undefined일 경우 우항의 값으로 대체.
  // null or undefined가 아니라면? -> 원래의 변수값으로 적용.
  const cn = `button ${className ?? ''}`;

  return (
    <button type={type} className={cn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
