import React, { useState } from 'react';
import '../styles/sharedStyles.scss';

const MediumMath = () => {
  const [count, setCount] = useState(0);
  const actions = [
    {
      title: 'Reset',
      onClick: () => setCount(0),
    },
    {
      title: '+',
      onClick: () => setCount(count + 10),
    },
    {
      title: '-',
      onClick: () => setCount(count - 10),
    },
    {
      title: '*',
      onClick: () => setCount(count * 10),
    },
    {
      title: '/',
      onClick: () => setCount(count / 10),
    },
  ];

  return (
    <div className="box">
      {actions.map(({ title, onClick }) => (
        <button
          key={Math.floor(Math.random() * 2000)}
          className="btn"
          onClick={onClick}
        >
          {title}
        </button>
      ))}
      <span className="result">{count}</span>
    </div>
  );
};

export default MediumMath;
