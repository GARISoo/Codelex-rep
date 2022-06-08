import React from 'react';
import TaskDetails from './TaskDetails';
import './Tasks.scss';

type TaskProps = {
  id: string,
  text: string,
  done: boolean,
}

const allTasks = TaskDetails.map(({ id, text, done }: TaskProps) => (
  <div className="task__box">
    <div
      key={id}
      className={`task ${done ? 'task__done' : ''}`}
    >
      {text}
    </div>
  </div>
));

const AllTasks = () => (
  <div className="task__row">
    {allTasks}
  </div>
);

export default AllTasks;
