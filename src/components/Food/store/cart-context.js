import React from 'react';

// 카트에 담기거나 제외되는 항목들을 전역 상태 관리하는 컨텍스트
// 초기 객체는 뭘 담을지에 대한 것을 간단하게 정의.
const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
