import React, { useContext } from 'react';
import classes from './Navigation.module.css';
import { AuthContext } from '../store/AuthContextProvider';

const Navigation = ({ onLogout }) => {
  // Context store에 좀 더 쉽게 접근해서 소비할 수 있게 도와주는 useContext Hook.
  // AuthContext에서 제공하는 전역 객체를 디스트럭처링으로 분해.
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      {isLoggedIn && (
        <ul>
          <li>
            <a href='#'>MyPage</a>
          </li>
          <li>
            <a href='#'>Admin</a>
          </li>
          <li>
            <button onClick={() => onLogout()}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
