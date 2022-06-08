import React from 'react';
import './Cards.scss';
import vegetables from './VeggieDetails';
import CardButton from './CardButton';

type VeggieProps = {
    id: string,
    title: string,
    description: string,
    backgroundColor: string,
    available: boolean,
}

const allVeggies = vegetables.map(({
  id, title, description, backgroundColor, available,
}: VeggieProps) => (
  <div
    className="card__box"
    key={id}
    style={{ backgroundColor }}
  >
    {available ? (
      <div className="card__content">
        <div className="card__header">
          <h1 className="card__h1">{title}</h1>
          <span>{id}</span>
        </div>
        <p className="card__desc">{description}</p>
        <CardButton
          BtnText="read more"
          // eslint-disable-next-line no-alert
          onButtonClick={() => alert(`product ID: ${id}`)}
        />
      </div>
    ) : <em>not available</em>}
  </div>
));

const AllVeggies = () => (
  <div className="cards__row">
    {allVeggies}
  </div>
);

export default AllVeggies;
