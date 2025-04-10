import React, { useState } from 'react';
import Header from './components/Food/Layout/Header';
import Meals from './components/Food/Meals/Meals';
import Cart from './components/Food/Cart/Cart';

const App = () => {
  // 카트 모달의 공개 여부를 결정하는 상태 변수
  const [cartIsShown, setCartIsShown] = useState(false);

  // 모달을 열어주는 핸들러
  const showCartHandler = () => setCartIsShown(true);

  // 모달을 닫아주는 핸들러
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </>
  );
};

export default App;
