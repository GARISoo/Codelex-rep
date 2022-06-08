import React, { useState, useEffect, useRef } from 'react';
import '../styles.scss';

const Task2 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const countFontSize = useRef<HTMLDivElement | null >(null);

  const increaseFontSize = () => {
    if (countFontSize.current) {
      const fontIncrease = countFontSize.current;
      const currFontSize = Number(fontIncrease.style.fontSize.replace('px', ''));
      fontIncrease.style.fontSize = `${String(currFontSize + 1)}px`;
    }
  };

  useEffect(() => setCount(100), []);

  useEffect(() => {
    if (countFontSize.current) {
      const fontIncrease = countFontSize.current;
      fontIncrease.style.fontSize = '15px';
    }
  }, []);

  useEffect(() => increaseFontSize(), [count]);

  useEffect(() => {
    document.title = inputValue;
  }, [inputValue]);

  return (
    <div className="task">

      <div className="task__box">
        <button
          className="task__btn"
          onClick={() => setCount(count + 1)}
        >
          <b>+</b>
        </button>
        <span className="task__counter">
          count:
          {count}
        </span>
      </div>

      <div className="task__box">
        <input
          className="task__input"
          type="text"
          value={inputValue}
          placeholder="Type here..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span
          ref={countFontSize}
          className="task__output"
        >
          {inputValue}
        </span>
      </div>
    </div>
  );
};

export default Task2;
