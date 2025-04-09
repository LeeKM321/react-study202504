import React from 'react';
import Card from '../../UI/Card';
import styles from './UserList.module.css';

const UserList = () => {
  // App.js에 있는 USER_LIST에 있는 회원 정보를 바탕으로
  // ul 안에 li를 추가해 주세요.

  return (
    <Card className={styles.users}>
      <ul>
        <li>이름: 홍길동, 나이: 24세</li>
        <li>이름: 김춘식, 나이: 10세</li>
      </ul>
    </Card>
  );
};

export default UserList;
