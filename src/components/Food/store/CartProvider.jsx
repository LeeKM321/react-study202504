import React, { useReducer } from 'react';
import CartContext from './cart-context';

// 리듀서 함수 정의: 여러가지 복잡한 상태관리를 중앙 집중화
// state: 업데이트 전의 최신 상태
// action: 어떤 업데이트를 하는지에 대한 정보와 필요값들이 들어 있음. (dispatch에 의해 전달)
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // 기존 상태가 가지고 있는 카트 항목에 새로운 항목을 추가.
    const updateItems = [...state.items, action.item];
    console.log('추가된 아이템: ', updateItems);

    // 변경된 상태를 객체 형태로 리턴 -> cartState로 전달됨.
    return {
      items: updateItems,
    };
  }
};

// App.js에서 CartContext를 바로 provide 할 수도 있지만,
// Cart에 관련된 기능이 App.js에 있으면 기능별로 컴포넌트를 구분할 수 없기 때문에
// CartProvider를 생성해서 provider에 관련한 기능을 몰아주겠다.
const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  // 컨슈머들이 실제로 받아서 사용할 객체를 따로 정의
  // 밑에 value에 직접 써도 되는데, 길어질 까봐 따로 뺐어요.
  const cartContextData = {
    items: cartState.items,
    addItem: (item) => {
      dispatchCartAction({
        type: 'ADD',
        item,
      });
    },
    removeItem: (id) => {
      dispatchCartAction({
        type: 'REMOVE',
        id,
      });
    },
  };

  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
