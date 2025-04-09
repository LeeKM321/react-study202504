import React, { useState } from 'react';
import styles from './CourseInput.module.css';
import Button from '../../UI/Button';
import './A.css';
import './B.css';

const CourseInput = ({ onAdd }) => {
  // module.css를 사용하면 css 내에서 사용한 클래스 이름을 객체화 해서 전달합니다.
  const { 'form-control': formControl, invalid } = styles;

  // 입력창 상태 변수
  const [enteredText, setEnteredText] = useState('');
  // 입력값이 유효한지에 대한 상태 변수
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // submit 전에 최종 입력값 검증.
    if (!enteredText.trim()) {
      setIsValid(false);
      return;
    }

    onAdd({
      id: Math.random().toString(),
      text: enteredText,
    }); // 부모에게 데이터 전달 (함수 호출)

    // 전송이 끝나면 입력창 비우기
    setEnteredText('');
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;

    // 입력값 검증
    if (inputValue.trim().length > 0) {
      setIsValid(true); // 뭐라도 작성이 되었다면 유효하다!
    } else setIsValid(false);

    setEnteredText(e.target.value);
  };

  console.log(`isValid: ${isValid}`);

  return (
    <form onSubmit={handleSubmit}>
      <p className='test'>Hello Module.css~~!!</p>
      <div className={`${formControl} ${!isValid ? invalid : ''}`}>
        <label>나의 목표</label>
        <input type='text' value={enteredText} onChange={handleInput} />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
