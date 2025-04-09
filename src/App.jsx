import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

const USER_LIST = [];

const App = () => {
  const [userList, setUserList] = useState(USER_LIST);

  return (
    <div>
      <AddUsers />
      <UserList />
    </div>
  );
};

export default App;
