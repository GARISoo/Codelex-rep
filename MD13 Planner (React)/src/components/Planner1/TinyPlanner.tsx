import React, { useState } from 'react';
import '../styles.scss';

const TinyPlanner = () => {
  type TaskProps = {
    title: string;
  }

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`planner ${darkTheme ? 'dark-theme' : 'light-theme'}`}>

      <button onClick={() => setDarkTheme((prevTheme) => !prevTheme)}>
        o
      </button>

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
            };
            if (newTask.title !== '') {
              setTasks([...tasks, newTask]);
              setInputValue('');
            }
          }}
        >
          Add
        </button>
      </div>

      <div className="planner__tasks">
        {tasks.map(({ title }) => (
          <div
            className="planner__task"
          >
            {title}
          </div>
        ))}
      </div>

    </div>
  );
};

export default TinyPlanner;
