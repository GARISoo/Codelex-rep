import React, { useState } from 'react';
import { convertTypeAcquisitionFromJson } from 'typescript';
import './CoolArray.scss';

const CoolArray = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [number, setNumber] = useState(arr);
  const actions = [
    {
      title: 'Remove from end',
      onClick: () => setNumber(number.splice(0, number.length - 1)),
    },
    {
      title: 'Remove from start',
      onClick: () => setNumber(number.splice(1, number.length)),
    },
    {
      title: 'Reset',
      onClick: () => setNumber(arr),
    },
    {
      title: 'Remove All',
      onClick: () => setNumber([]),
    },
    {
      title: 'Show > 5',
      onClick: () => setNumber(number.filter((num) => num > 5)),
    },
    {
      title: 'All numbers x2',
      onClick: () => setNumber(number.map((num) => num * 2)),
    },
    {
      title: 'All numbers / 10',
      onClick: () => setNumber(number.map((num) => num / 10)),
    },
  ];

  return (
    <div className="box">
      <div>
        {actions.map(({ title, onClick }) => (
          <button
            key={Math.floor(Math.random() * 2000)}
            onClick={onClick}
            className="btn"
          >
            {title}
          </button>
        ))}
      </div>
      <div className="flex-row center">
        {number.map((el) => (
          <button
            key={Math.floor(Math.random() * 2000)}
            className="clickable"
            onClick={() => setNumber(number.filter((num) => num !== el))}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoolArray;
