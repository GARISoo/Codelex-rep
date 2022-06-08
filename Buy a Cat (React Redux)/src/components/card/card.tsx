/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import {
  addItems, itemCounter, setSubTotal,
} from '../../redux/productsReducer';
import styles from './card.module.scss';

export type CardProps = {
  id: number,
  img: string,
  title: string,
  amount: number,
  price: number,
  selectedCard?: any,
}

const Card = ({
  id, img, title, amount, price, selectedCard,
}: CardProps) => {
  const [currentAmount, setCurrentAmount] = useState(amount);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.card} key={id}>
      <div className={styles.card__top}>
        <img
          className={styles.card__img}
          src={img}
          alt="selfie"
        />
      </div>
      <div className={styles.card__middle}>
        <h3 className={styles.card__h3}>{title}</h3>
        <span className={styles.card__price}>{`${price}$`}</span>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__counter}>
          <button
            disabled={currentAmount === 1}
            className={styles.card__btn}
            onClick={() => setCurrentAmount(currentAmount - 1)}
          >
            -
          </button>
          <span>{currentAmount}</span>
          <button
            className={styles.card__btn}
            onClick={() => setCurrentAmount(currentAmount + 1)}
          >
            +
          </button>
        </div>
        <button
          className={styles.card__buy}
          onClick={() => {
            selectedCard = { ...selectedCard, amount: currentAmount };
            dispatch(itemCounter(currentAmount));
            dispatch(addItems(selectedCard));
            setCurrentAmount(1);
            dispatch(setSubTotal(price * currentAmount));
          }}
        >
          Buy Me
        </button>
      </div>
    </div>
  );
};

export default Card;
