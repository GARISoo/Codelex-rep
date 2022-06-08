import React from 'react';
import './CardButton.scss';

type ButtonProp = {
    onButtonClick: () => void;
    BtnText: string;
}

const CardButton = ({ BtnText, onButtonClick }: ButtonProp) => (
  <button
    className="card__btn"
    onClick={() => {
      onButtonClick();
    }}
  >
    {BtnText}
  </button>
);

export default CardButton;
