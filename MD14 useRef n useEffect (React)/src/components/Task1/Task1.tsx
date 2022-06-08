import React, { useEffect, useState } from 'react';

const Task1 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Render');
  });

  useEffect(() => {
    console.log('First Render');
  }, []);

  useEffect(() => {
    console.log('Changing Count');
  }, [count]);

  useEffect(() => {
    console.log('Input Change');
  }, [inputValue]);

  return (
    <div className="task">
      <div className="task__box">
        <button
          onClick={() => setCount(count + 1)}
          className="task__btn"
        >
          <b>+</b>
        </button>
        <span className="task__output">
          count:
          {count}
        </span>
      </div>
      <div className="task__box">
        <input
          type="text"
          className="task__input"
          value={inputValue}
          placeholder="Type here..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span className="task__output">
          {inputValue}
        </span>
      </div>
    </div>
  );
};

export default Task1;
