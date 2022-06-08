import React, { useState } from 'react';
import '../styles.scss';

const SmollPlanner = () => {
  type TaskProps = {
      title:string;
      isDone: boolean;
      inProgress: boolean;
  }

  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [copyTasks, setCopyTasks] = useState<TaskProps[]>([]);

  const progressChecker = () => {
    let total = 0;
    const totalDone = tasks.filter((el) => el.isDone === true);
    total += totalDone.length;
    return total;
  };

  const taskActions = [
    {
      title: 'All',
      onClick: () => setTasks(copyTasks),
    },
    {
      title: 'In progress',
      onClick: () => {
        const tasksInProgress = copyTasks.filter((el) => !el.isDone);
        return setTasks(tasksInProgress);
      },
    },
    {
      title: 'Completed',
      onClick: () => {
        const tasksCompleted = copyTasks.filter((el) => el.isDone);
        return setTasks(tasksCompleted);
      },
    },
  ];

  const completed = (index: number) => {
    const newtaskLists = [...copyTasks];
    newtaskLists[index].isDone = !newtaskLists[index].isDone;
    return newtaskLists;
  };

  return (
    <div className="planner">

      <div className="planner__box">
        <input
          className="planner__input"
          type="text"
          placeholder="Add new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="planner__btn"
          onClick={() => {
            const newTask = {
              title: inputValue,
              isDone: false,
              inProgress: true,
            };
            if (newTask.title !== '') {
              setTasks([...tasks, newTask]);
              setInputValue('');
              setCopyTasks([...copyTasks, newTask]);
            }
          }}
        >
          Add
        </button>
      </div>

      {copyTasks.length > 0 && (
        <div className="planner__progress">
          <span>{`done: ${progressChecker()} / ${tasks.length}`}</span>
          <progress max={tasks.length} value={progressChecker()} className="planner__progress-el" />
        </div>
      )}

      <div className="planner__tasks">
        {tasks.map((task, index) => (
          <div>
            <input
              checked={task.isDone}
              type="checkbox"
              id={`${index}`}
              onChange={() => setTasks(completed(index))}
            />
            <label htmlFor={`${index}`}>
              {task.isDone ? <span className="planner__done">{task.title}</span> : task.title}
            </label>
          </div>
        ))}
      </div>

      <div className="planner__actions">
        {copyTasks.length > 0 && taskActions.map(({ title, onClick }) => (
          <button
            className="planner__btn small-btn"
            onClick={onClick}
          >
            {title}
          </button>
        ))}
      </div>

    </div>
  );
};

export default SmollPlanner;
