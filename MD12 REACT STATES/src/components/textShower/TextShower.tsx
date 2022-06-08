import React, { useState } from 'react';
import '../styles/sharedStyles.scss';

const TextShower = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="box">
      <button className="btn" onClick={() => setInputValue('')}>Parādīt tekstu</button>
      <input className="text__input" type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
      <span className="result">
        {inputValue}
      </span>
    </div>
  );
};

export default TextShower;
