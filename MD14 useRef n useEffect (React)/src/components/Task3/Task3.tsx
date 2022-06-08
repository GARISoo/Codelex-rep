import React, {
  useState, useEffect, useRef, createElement,
} from 'react';
import '../styles.scss';

const Task3 = () => {
  const focusFirstInput = useRef<HTMLInputElement | null >(null);
  const focusSecondInput = useRef<HTMLInputElement | null >(null);
  const buttonRef = useRef<HTMLButtonElement | null >(null);
  const boxWrapper = useRef<HTMLDivElement | null >(null);
  const [inputValue, setInputValue] = useState('');
  const [array, setArray] = useState<any[]>([]);
  const [countButton, setCountButton] = useState(2);
  const [countDiv, setCountDiv] = useState(4);
  const [chosenColor, setChosenColor] = useState('');
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (focusSecondInput.current) focusSecondInput.current.focus();
  }, [array]);

  useEffect(() => {
    if (focusFirstInput.current) focusFirstInput.current.focus();
  }, []);

  useEffect(() => {
    if (buttonRef.current) buttonRef.current.disabled = true;
    setTimeout(() => {
      if (buttonRef.current) buttonRef.current.disabled = false;
    }, 5000);
  }, []);

  useEffect(() => {
    if (chosenColor !== '') {
      const newDiv = document.createElement('div');
      newDiv.className = 'added-box';
      newDiv.style.backgroundColor = chosenColor;
      setChosenColor('');
      if (boxWrapper.current) boxWrapper.current.appendChild(newDiv);
    }
  }, [add]);

  return (
    <div className="task">
      <div className="task__box">
        <input
          className="task__input"
          type="text"
          ref={focusFirstInput}
          placeholder="focus input on load..."
        />
      </div>
      <div className="task__box">
        <input
          className="task__input"
          type="text"
          value={inputValue}
          placeholder="create an array here..."
          onChange={(e) => setInputValue(e.target.value)}
          ref={focusSecondInput}
        />
        <button
          className="task__btn"
          onClick={() => {
            const newArrEl = ` ${inputValue}`;
            setArray([...array, newArrEl]);
            setInputValue('');
          }}
        >
          <b>SUBMIT</b>
        </button>
        <span
          className="task__output"
        >
          {`array: \r\n [${array}]`}
        </span>
      </div>
      <div className="task__box">
        <button
          className="task__btn"
          ref={buttonRef}
        >
          <b>BUTTON</b>
        </button>
      </div>
      <div className="task__box">
        <button
          className="task__btn"
          onClick={() => {
            setCountButton(countButton + 1);
            setCountDiv(countDiv * 2);
          }}
        >
          <b>{`COUNT: ${countButton}`}</b>
        </button>
        <div className="task__output">
          {countDiv}
        </div>
      </div>
      <div className="task__box">
        <div>
          <button
            className="task__btn"
            onClick={() => {
              if (chosenColor !== '') setAdd(!add);
            }}
          >
            <b>+</b>
          </button>
          <select
            className="task__input"
            name=""
            id=""
            value={chosenColor}
            onChange={(e) => setChosenColor(e.target.value)}
          >
            <option value="" disabled>Color dropdown</option>
            <option value="#34568B">Classic Blue</option>
            <option value="#FF6F61">Living Coral</option>
            <option value="#6B5B95">Ultra Violet</option>
            <option value="#88B04B">Greenery</option>
            <option value="#F7CAC9">Rose Quartz</option>
            <option value="#92A8D1">Serenity</option>
            <option value="#955251">Marsala</option>
            <option value="#009B77">Emerald</option>
            <option value="#DD4124">Tangerine Tango</option>
          </select>
        </div>
        <div ref={boxWrapper} className="task__box-wrapper" />
      </div>
    </div>
  );
};

export default Task3;
