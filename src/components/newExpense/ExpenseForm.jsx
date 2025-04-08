import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // 상태값을 처리하는 함수 (hook)
  // useState는 배열을 리턴합니다. 디스트럭쳐링 문법으로 뽀개서 사용하는 것이 일반적.
  // 첫번째 요소는 관리할 상태값의 초기값
  // 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter 함수
  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    // useState의 setter는 콜백 함수를 매개값으로 받을 수 있음.
    // 콜백의 매개값으로는 이전 상태값이 전달됨.
    // 이전 상태에서 title을 제외한 나머지는 그대로 복사하고, title 프로퍼티 값만 변경.
    setUserInput((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const priceChangeHandler = (e) => {
    setUserInput((prev) => ({ ...prev, price: e.target.value }));
  };

  const dateChangeHandler = (e) => {
    setUserInput((prev) => ({ ...prev, date: e.target.value }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit 기능 중지! -> fetch를 통해 백엔드로 데이터 전달.
    // 리액트는 단순히 변수가 변경된다고 화면의 렌더링을 변경하지 않고
    // 오로지 상태값이 변화되었다는 감지에 의해서만 재렌더링을 시도.
    // 상태가 변화했다는 트리거는 useState로부터 받은 setter 뿐입니다.
    console.log(userInput);

    // 다음 입력을 위한 입력창 리셋
    setUserInput({
      title: '',
      price: '',
      date: '',
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='100'
            step='100'
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
