import React from 'react';
import Card from '../../UI/Card';
import styles from './UserList.module.css';

const UserList = ({ list }) => {
  // App.js에 있는 USER_LIST에 있는 회원 정보를 바탕으로
  // ul 안에 li를 추가해 주세요.
  console.log(list);

  return (
    <Card className={styles.users}>
      <ul>
        {list.map((user, i) => {
          return (
            <li key={i}>
              이름: {user.userName}, 나이: {user.age}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
