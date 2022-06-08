import React, { useState } from 'react';
import './CubeChanger.scss';
import '../styles/sharedStyles.scss';

const CubeChanger = () => {
  const [color, setColor] = useState('white');
  const [text, setText] = useState('Nav nospiests');
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className="box flex-row">
      <div className="flex-row">
        <button className="btn" onClick={() => setColor(`#${randomColor}`)}>
          Mainīt kuba krāsu
        </button>
        <button className="btn" onClick={() => setText('Nospiests')}>
          Mainīt tekstu uz nospiests
        </button>
        <div className="cube" style={{ backgroundColor: `${color}` }} />
      </div>
      <div className="result">
        {text}
      </div>
    </div>
  );
};

export default CubeChanger;
