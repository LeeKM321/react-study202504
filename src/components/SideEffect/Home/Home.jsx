import React from 'react';
import Card from '../../UI/Card';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Card className={styles.home}>
      <h1>Welcome Back!</h1>
    </Card>
  );
};

export default Home;
