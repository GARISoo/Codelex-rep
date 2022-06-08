import { title } from 'process';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import { idText } from 'typescript';
import '../styles/sharedStyles.scss';

const Cards = () => {
  const cardDetails = [
    {
      id: 1,
      desc: 'first card',
    },
    {
      id: 2,
      desc: 'second card',
    },
    {
      id: 3,
      desc: 'third card',
    },
    {
      id: 4,
      desc: 'fourth card',
    },
    {
      id: 5,
      desc: 'fifth card',
    },
    {
      id: 6,
      desc: 'sixth card',
    },
  ];

  type CardProps = {
    id?: number;
    desc: string
  }

  const [card, setCard] = useState(cardDetails);

  const actions = [
    {
      desc: 'Reset',
      onClick: () => setCard(cardDetails),
    },
    {
      desc: 'Remove all',
      onClick: () => setCard([]),
    },
    {
      desc: 'Make all titles UPPERCASE',
      // onClick: () => setCard(card.map((el) => el.desc.toUpperCase())),
    },
  ];

  return (
    <div className="box">
      <div className="card__buttons">
        {actions.map(({ desc, onClick }) => (
          <button
            className="btn"
            onClick={onClick}
          >
            {desc}
          </button>
        ))}
      </div>
      <div className="card__box">
        {card.map(({ id, desc }) => (
          <div className="card">
            <div className="flex-row">
              <span>{`ID: ${id}`}</span>
              <button
                className="card__close-btn"
                key={id}
                onClick={() => setCard(card.filter((el) => el.id !== id))}
              >
                X
              </button>
            </div>
            <h2>{`TITLE: ${desc}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
