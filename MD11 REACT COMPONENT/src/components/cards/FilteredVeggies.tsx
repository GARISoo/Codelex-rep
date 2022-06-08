import './Cards.scss';
import vegetables from './VeggieDetails';
import CardButton from './CardButton';

const onlyAvailableVeggies = vegetables
  .filter(({ available }) => available)
  .map(({
    id, title, description, backgroundColor,
  }) => (
    <div
      className="card__box"
      key={id}
      style={{ backgroundColor }}
    >
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
    </div>
  ));

const FilteredVeggies = () => (
  <div className="cards__row">
    {onlyAvailableVeggies}
  </div>
);

export default FilteredVeggies;
