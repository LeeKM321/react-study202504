import React from 'react';
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

  return (
    <>
      <NewExpense />
      <div className='expenses'>
        {expenses.map((item) => (
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
