/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardProps } from '../card/card';
import styles from './cartItem.module.scss';
import { AppDispatch } from '../../store';
import { itemCounter, setSubTotal } from '../../redux/productsReducer';

const CartItem = ({
  img, title, amount, price, id,
}: CardProps) => {
  const [diffAmount, setDiffAmount] = useState(amount);
  const [total, setTotal] = useState(price);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setTotal(price * diffAmount);
  }, [diffAmount]);

  return (
    <div
      className={styles.card}
      key={id}
    >
      <div className={styles.card__left}>
        <img
          src={img}
          alt="selfie"
          className={styles.card__img}
        />
      </div>
      <div className={styles.card__middle}>
        <h3 className={styles.card__h3}>{title}</h3>
        <p className={styles.card__p}>{`Total units: ${diffAmount}`}</p>
        <div className={styles.card__btns}>
          <button
            disabled={diffAmount === 1}
            className={styles.card__btn}
            onClick={() => {
              setDiffAmount(diffAmount - 1);
              dispatch(itemCounter(-1));
              dispatch(setSubTotal(-price));
            }}
          >
            -
          </button>
          <button
            className={styles.card__btn}
            onClick={() => {
              setDiffAmount(diffAmount + 1);
              dispatch(itemCounter(1));
              dispatch(setSubTotal(price));
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.card__right}>
        <span className={styles.card__cost}>{`Price per unit: ${price}$`}</span>
        <span className={styles.card__cost}><b>{`In Total: ${total.toFixed(2)}$`}</b></span>
      </div>
    </div>
  );
};

export default CartItem;
