import React, { useState } from 'react';
import Card from '../../UI/Card';
import styles from './AddUsers.module.css';
import Button from '../../UI/Button';
import ErrorModal from '../Modal/ErrorModal';

const AddUsers = ({ onAdd }) => {
  /*
    이름과 나이를 입력받아서, 가입하기 버튼을 누르면 가입 처리를 해 주세요.
    가입 처리? -> App.jsx에 있는 USER_LIST에 객체 형태로 추가.
    */

  const [userValue, setUserValue] = useState({
    userName: '',
    age: '',
  });

  // 에러 상태를 관리하는 변수
  const [error, setError] = useState(null);

  const userSubmitHandler = (e) => {
    e.preventDefault();
    if (!userValue.userName.trim() || userValue.age.trim() === '') {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 공백으로 작성하시면 안됩니다!',
      });
      return;
    }

    if (+userValue.age < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1 이상의 숫자로 작성해 주세요!',
      });
      return;
    }

    onAdd(userValue);

    setUserValue({
      userName: '',
      age: '',
    });
  };

  const userNameChangeHandler = (e) => {
    setUserValue((prev) => ({ ...prev, userName: e.target.value }));
  };

  const ageChangeHandler = (e) => {
    setUserValue((prev) => ({ ...prev, age: e.target.value }));
  };

  return (
    <>
      {/* 단축 평가 연산을 활용한 컴포넌트의 조건부 렌더링
        error 상태 변수가 truthy or falsy에 따라 우항에 있는 컴포넌트를 드러낼 것이냐 말 것이냐를 결정. */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor='username'>이름</label>
          <input
            id='username'
            type='text'
            onChange={userNameChangeHandler}
            value={userValue.userName}
          />
          <label htmlFor='age'>나이</label>
          <input
            id='age'
            type='number'
            onChange={ageChangeHandler}
            value={userValue.age}
          />
          <Button type='submit'>가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
