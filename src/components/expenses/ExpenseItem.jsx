import React from 'react';
import './ExpenseItem.css';

// 전달되는 props는 객체로 옵니다. 디스트럭쳐링 등의 문법으로 쪼개서 사용할 수 있습니다.
const ExpenseItem = ({ title, price, date }) => {
  return (
    <div className='expense-item'>
      <div>{date.toLocaleString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{price}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
