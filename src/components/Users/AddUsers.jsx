import React, { useState } from 'react';
import Card from '../../UI/Card';
import styles from './AddUsers.module.css';
import Button from '../../UI/Button';

const AddUsers = ({ onAdd }) => {
  /*
    이름과 나이를 입력받아서, 가입하기 버튼을 누르면 가입 처리를 해 주세요.
    가입 처리? -> App.jsx에 있는 USER_LIST에 객체 형태로 추가.
    */

  const [userValue, setUserValue] = useState({
    userName: '',
    age: '',
  });

  const userSubmitHandler = (e) => {
    e.preventDefault();
    if (!userValue.userName.trim() || userValue.age.trim() === '') {
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
  );
};

export default AddUsers;
