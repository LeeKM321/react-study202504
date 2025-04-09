import React from 'react';
import CourseItem from './CourseItem';
import './CourseList.css';

const CourseList = () => {
  return (
    <ul className='goal-list'>
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </ul>
  );
};

export default CourseList;
