import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../../UI/Card';

// 전달되는 props는 객체로 옵니다. 디스트럭쳐링 등의 문법으로 쪼개서 사용할 수 있습니다.
const ExpenseItem = ({ title, price, date }) => {
  return (
    <Card className='circle'>
      <div className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{price}원</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
