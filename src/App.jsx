import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

const USER_LIST = [];

const App = () => {
  const [userList, setUserList] = useState(USER_LIST);

  const addUserHandler = (newUser) => {
    console.log(newUser);

    setUserList((prev) => [...prev, newUser]);
  };

  return (
    <div>
      <AddUsers onAdd={addUserHandler} />
      <UserList list={userList} />
    </div>
  );
};

export default App;
