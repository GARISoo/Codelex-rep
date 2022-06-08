import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
  const [val, setVal] = useState('');
  const numberDetails = [
    {
      number: 1,
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      number: 2,
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      number: 3,
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      number: 4,
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      number: 5,
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      number: 6,
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      number: 7,
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      number: 8,
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      number: 9,
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      number: 0,
      onClick: (e: any) => setVal(val + e.target.value),
    },
  ];

  const numberActions = [
    {
      action: '+',
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      action: '-',
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      action: '*',
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      action: '/',
      onClick: (e: any) => setVal(val + e.target.value),
    },
    {
      action: '=',
      // eslint-disable-next-line no-eval
      onClick: () => setVal(eval(val)),
    },
    {
      action: 'AC',
      onClick: () => setVal(''),
    },
  ];

  return (
    <div className="box flex-center">
      <div className="calculator">
        <div>
          <input type="text" className="calculator__input" value={val} onChange={(e) => setVal(e.target.value)} />
        </div>
        <div className="calculator__buttons">
          <div className="calculator__numbers">
            {numberDetails.map(({ number, onClick }) => (
              <button className="calculator__btn" onClick={onClick} value={number}>{number}</button>
            ))}
          </div>
          <div className="calculator__actions">
            {numberActions.map(({ action, onClick }) => (
              <button className="calculator__btn" onClick={onClick} value={action}>{action}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
