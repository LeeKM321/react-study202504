import React, { useState } from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../../../UI/Input';

const MealItemForm = ({ id, onAddToCart }) => {
  // 수량의 상태를 관리하는 변수
  const [amount, setAmount] = useState(1);

  // 수량이 변경될 때마다 발동하는 함수
  const amountHandler = (amt) => {
    setAmount(amt);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // submit이 발동하면 수량을 부모에게 넘기겠다.
    onAddToCart(amount);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        onAdd={amountHandler}
        label='수량'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
