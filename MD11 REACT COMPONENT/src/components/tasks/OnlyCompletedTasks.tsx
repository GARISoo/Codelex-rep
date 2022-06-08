import React from 'react';
import TaskDetails from './TaskDetails';
import './Tasks.scss';

const onlyCompletedTasks = TaskDetails
  .filter(({ done }) => !done)
  .map(({ id, text }) => (
    <div className="task__box">
      <div
        key={id}
        className="task"
      >
        {text}
      </div>
    </div>
  ));

const OnlyCompletedTasks = () => (
  <div className="task__row">
    {onlyCompletedTasks}
  </div>
);

export default OnlyCompletedTasks;
