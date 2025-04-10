import React from 'react';
import styles from './MealsSummary.module.scss';

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>맛있는 음식, 집까지 배달해 드립니다</h2>
      <p>
        다양한 메뉴 중에서 가장 좋아하는 음식을 선택하여 집에서 편안하게
        점심이나 저녁을 즐겨보세요.
      </p>
      <p>
        우리의 모든 음식들은 고급 재료로 만들어지며, 적절한 시간에 경험이 풍부한
        요리사들이 직접 요리합니다!
      </p>
    </section>
  );
};

export default MealsSummary;
