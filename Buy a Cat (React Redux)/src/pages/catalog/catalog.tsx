import { useState } from 'react';
import Card from '../../components/card/card';
import cardsData from '../../data/cardsData';
import './catalog.scss';

const Catalog = () => {
  const [loadMore, setLoadMore] = useState(6);

  return (
    <div className="main">
      <div className="catalog">
        {cardsData.slice(0, loadMore).map((el) => {
          const card = cardsData.find((e) => e.id === el.id);
          return (
            <Card
              id={el.id}
              title={el.title}
              img={el.img}
              amount={el.amount}
              price={el.price}
              selectedCard={card}
            />
          );
        })}
      </div>
      {loadMore < cardsData.length && (
      <button
        onClick={() => setLoadMore(loadMore + 6)}
        className="load-btn"
      >
        Load More...
      </button>
      )}
    </div>
  );
};

export default Catalog;
