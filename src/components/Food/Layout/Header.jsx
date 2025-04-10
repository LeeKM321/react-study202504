import React from 'react';
import styles from './Header.module.scss';
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={onShowCart} />
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='Looks very delicious meals' />
      </div>
    </>
  );
};

export default Header;
