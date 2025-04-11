import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  // css module에서 가져온 클래스들을 디스트럭쳐링 해서 사용.
  const { button, icon, badge } = styles;

  const { items } = useContext(CartContext);

  const numberOfCart = items.reduce((accu, item) => accu + item.amount, 0);

  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
