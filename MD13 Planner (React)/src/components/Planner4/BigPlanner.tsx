import React, { useState } from 'react';

const BigPlanner = () => {
    type TaskProps = {
        title:string;
        isDone: boolean;
        inProgress: boolean;
        id: number;
    }

    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [copyTasks, setCopyTasks] = useState<TaskProps[]>([]);
    const [todoEditing, setTodoEditing] = useState<any>(null);
    const [editingText, setEditingText] = useState('');
    const randomNumber = Math.floor(Math.random() * 1000);

    const submitEdits = (id: number) => {
      const updatedTask = [...tasks].map((task) => {
        if (task.id === id) {
          // eslint-disable-next-line no-param-reassign
          task.title = editingText;
        }
        return task;
      });
      setTasks(updatedTask);
      setTodoEditing(null);
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
                id: randomNumber,
              };
              setTasks([...tasks, newTask]);
              setInputValue('');
              setCopyTasks([...copyTasks, newTask]);
            }}
          >
            Add
          </button>
        </div>

        <div className="planner__tasks">
          {tasks.map((task, index) => (
            task.title === '' ? null : (
              <div className="planner__row">

                <div className="planner__left">
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

                <div className="planner__right">
                  {task.id === todoEditing && (
                  <input
                    className="planner__input"
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  )}
                  {task.id === todoEditing ? (
                    <button
                      className="planner__btn small-btn"
                      onClick={() => submitEdits(task.id)}
                    >
                      save
                    </button>
                  ) : (
                    <button
                      className="planner__btn small-btn"
                      onClick={() => setTodoEditing(task.id)}
                    >
                      edit
                    </button>
                  )}
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
            )))}
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

export default BigPlanner;
