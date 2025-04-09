import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../../UI/Button';

const CourseInput = ({ onAdd }) => {
  // 입력창 상태 변수
  const [enteredText, setEnteredText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      id: Math.random().toString(),
      text: enteredText,
    }); // 부모에게 데이터 전달 (함수 호출)

    // 전송이 끝나면 입력창 비우기
    setEnteredText('');
  };

  const handleInput = (e) => {
    setEnteredText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label>나의 목표</label>
        <input type='text' value={enteredText} onChange={handleInput} />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
