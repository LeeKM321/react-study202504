import React, { useContext } from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

const MealItem = ({ id, price, description, name }) => {
  const { meal, description: desc, price: priceStyle } = styles;

  // 금액 자리수 표시
  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  // 카트에다가 음식의 정보와 수량을 보내자. -> 카트 정보는 전역적으로 관리하고 있다.
  // useContext를 이용해서 필요한 함수만 뽑아서 사용하기.
  const { addItem } = useContext(CartContext);

  // MealItemForm에게 넘길 함수 -> 수량 받아와야 해요.
  const addToCartHandler = (amount) => {
    const newItem = {
      id,
      name,
      price: +price,
      amount: +amount,
    };
    addItem(newItem);
  };

  return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
