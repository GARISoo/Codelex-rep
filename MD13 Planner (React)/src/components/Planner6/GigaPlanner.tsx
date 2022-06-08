import React, { useState } from 'react';

const GigaPlanner = () => {
    type TaskProps = {
        title:string;
        isDone: boolean;
        inProgress: boolean;
        id: number;
        priority: string;
    }

    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [copyTasks, setCopyTasks] = useState<TaskProps[]>([]);
    const [priority, setPriority] = useState('');
    const randomNumber = Math.floor(Math.random() * 1000);

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
      {
        title: 'Low priority',
        onClick: () => {
          const lowPriority = copyTasks.filter((el) => el.priority === 'low');
          return setTasks(lowPriority);
        },
      },
      {
        title: 'Medium priority',
        onClick: () => {
          const mediumPriority = copyTasks.filter((el) => el.priority === 'medium');
          return setTasks(mediumPriority);
        },
      },
      {
        title: 'High priority',
        onClick: () => {
          const highPriority = copyTasks.filter((el) => el.priority === 'high');
          return setTasks(highPriority);
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
            required
            onChange={(e) => setInputValue(e.target.value)}
          />
          <select
            className="planner__input"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="" disabled>Important much?</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button
            className="planner__btn"
            onClick={() => {
              const newTask = {
                title: inputValue,
                isDone: false,
                inProgress: true,
                id: randomNumber,
                priority,
              };
              if (priority !== '') {
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
            <div className={`planner__row ${task.priority}`}>
              <div className="planner__left">
                <span className="priority__title">{`${task.priority} priority`}</span>
                <div>
                  <input
                    checked={task.isDone}
                    type="checkbox"
                    id={`${index}`}
                    onChange={() => setTasks(completed(index))}
                    required
                  />
                  <label htmlFor={`${index}`}>
                    {task.isDone ? <span className="planner__done">{task.title}</span> : task.title}
                  </label>
                </div>
              </div>

              <div className="planner__right">
                <button
                  className="planner__btn-remove"
                  onClick={() => {
                    setCopyTasks(copyTasks.filter((_, i) => i !== index));
                    setTasks(tasks.filter((_, i) => i !== index));
                  }}
                >
                  X
                </button>
              </div>

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

export default GigaPlanner;
