import React from 'react';
import styles from './AvailableMeals.module.scss';
import MealItem from './MealItem/MealItem';
import Card from '../../../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '스시',
    description: '최고급 신선한 생선을 사용!',
    price: 23000,
  },
  {
    id: 'm2',
    name: '족발',
    description: '쫀득쫀득한 콜라겐의 향연!',
    price: 34000,
  },
  {
    id: 'm3',
    name: '띠드버거',
    description: '띠드버거 사주세요~~~',
    price: 12000,
  },
  {
    id: 'm4',
    name: '치킨 샐러드',
    description: '이거 먹으면 살빠질거 같지?',
    price: 8900,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
