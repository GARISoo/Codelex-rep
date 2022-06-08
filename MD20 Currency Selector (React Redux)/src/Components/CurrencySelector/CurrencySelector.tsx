import { useState } from 'react';
import { Currencies, CurrencyTypes } from '../../Data/CurrencyData/CurrencyData';

const CurrencySelector = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<CurrencyTypes[]>(Currencies);

  const updateArray = (el: CurrencyTypes) => {
    setSelectedCurrencies(selectedCurrencies.map((obj) => (
      (obj.currency === el.currency ? ({ ...obj, selected: !obj.selected }) : { ...obj })
    )));
  };

  return (
    <div className="container">

      <div className="container__box">
        {selectedCurrencies.map((obj) => (
          obj.selected === true && (
            <div
              className="container__chosen-el"
              key={obj.id}
            >
              <button
                onClick={() => updateArray(obj)}
                className="container__close-btn"
              >
                X
              </button>
              <span>{obj.currency}</span>
            </div>
          )
        ))}
      </div>

      <div className="container__box">
        {Currencies.map((el) => {
          const checkIfChecked = (selectedCurrencies.filter((obj) => (obj.currency === el.currency)))[0].selected;

          return (
            <label
              htmlFor={`checkbox__${el.currency}`}
              className="label"
            >
              <div className={`container__el ${checkIfChecked && 'active'}`}>
                <input
                  checked={checkIfChecked}
                  type="checkbox"
                  id={`checkbox__${el.currency}`}
                  onChange={() => updateArray(el)}
                  className="container__checkbox"
                />
                <span>
                  {el.currency}
                </span>
              </div>
            </label>
          );
        })}
      </div>

    </div>
  );
};

export default CurrencySelector;
