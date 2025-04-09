import React, { useState } from 'react';
import styles from './CourseInput.module.css';
import Button from '../../UI/Button';

const CourseInput = ({ onAdd }) => {
  // module.css를 사용하면 css 내에서 사용한 클래스 이름을 객체화 해서 전달합니다.
  // 여러 css 파일에 있는 클래스 이름 충돌을 더이상 신경쓰지 않아도 됩니다.
  // 변수명으로 파일을 구분하기 때문에 이름 짓는 거에 스트레스가 줄어듭니다.
  // 스타일의 출처를 쉽게 파악할 수 있는 장점도 있습니다.
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
      <div className={`${formControl} ${!isValid ? invalid : ''}`}>
        <label>나의 목표</label>
        <input type='text' value={enteredText} onChange={handleInput} />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
