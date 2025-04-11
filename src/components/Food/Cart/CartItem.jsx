import React, { useContext } from 'react';
import styles from './CartItem.module.scss';
import CartContext from '../store/cart-context';

const CartItem = ({ cart }) => {
  const { id, name, price, amount } = cart;

  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  const { addItem, removeItem } = useContext(CartContext);

  const cartAddItemHandler = () => {
    // + 버튼을 누르면 수량이 무조건 1이어야 한다.
    // cart를 그대로 전달하면 안됩니다!
    addItem({ ...cart, amount: 1 });
  };

  const cartRemoveItemHandler = () => {
    removeItem(id);
  };

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button onClick={cartRemoveItemHandler}>-</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
