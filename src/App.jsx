import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

const App = () => {
  // 목표 데이터들의 상태 관리 배열
  const [goals, setGoals] = useState([]);

  // CourseInput에게 전달할 함수
  const onAddGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  // 목표 삭제를 위한 함수
  const onDeleteGoal = (targetId) => {
    // id를 통해 해당 객체를 탐색한 후 배열에서 제거.
    // filter: 조건식과 일치하는 요소들만 새 배열에 담아 리턴.
    setGoals(goals.filter((g) => g.id !== targetId));

    /*
    for (let i = 0; i < goals.length; i++) {
      if (goals[i].id === targetId) {
        const copyGoals = [...goals];
        copyGoals.splice(i, 1);
        setGoals(copyGoals);
      }
    }
    */
  };

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={onAddGoal} />
      </section>
      <section id='goals'>
        <CourseList items={goals} onDelete={onDeleteGoal} />
      </section>
    </div>
  );
};

export default App;
