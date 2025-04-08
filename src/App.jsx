import React, { useState } from 'react';
import './App.css';
import Hello from './components/Example';
import Greet from './components/Greet';
import Bye from './components/Bye';
import ExpenseItem from './components/expenses/ExpenseItem';
import NoName from './NoName';
import NewExpense from './components/newExpense/NewExpense';

function App() {
  const expenses = [
    { id: 1, title: '냠냠치킨', price: 19000, date: new Date(2023, 6, 19) },
    { id: 2, title: '양파', price: 5000, date: new Date(2023, 6, 20) },
  ];

  // 지출 객체 배열을 상태변수로 관리 (변화가 생기면 재 렌더링 대상으로 삼기 위해)
  const [expenseList, setExpenseList] = useState(expenses);

  // 자식 컴포넌트의 데이터를 부모 컴포넌트에서 받아내는 방법. (props drilling)
  const addExpenseHandler = (newEx) => {
    const modifyEx = {
      ...newEx,
      id: expenseList[expenseList.length - 1].id + 1,
    };
    // push로 추가하면 리액트가 몰라요!!! setter로 변경하셔야 합니다!!
    // 스프레드 문법을 활용하여 expenseList 그대로 유지하면서 modifyEx만 추가
    setExpenseList([...expenseList, modifyEx]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className='expenses'>
        {expenseList.map((item) => (
          <ExpenseItem
            key={item.id} // 반복문을 통해 같은 컴포넌트를 표현할 때, 각각을 구분할 수 있게 해 주는 props
            title={item.title}
            price={item.price}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
}

export default App;
