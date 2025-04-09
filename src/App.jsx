import React from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

const App = () => {
  return (
    <div>
      <section id='goal-form'>
        <CourseInput />
      </section>
      <section id='goals'>
        <CourseList />
      </section>
    </div>
  );
};

export default App;
