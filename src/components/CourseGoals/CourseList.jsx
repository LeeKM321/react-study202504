import React from 'react';
import CourseItem from './CourseItem';
import './CourseList.css';

const CourseList = ({ items, onDelete }) => {
  return (
    <ul className='goal-list'>
      {items.map((item) => (
        <CourseItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default CourseList;
