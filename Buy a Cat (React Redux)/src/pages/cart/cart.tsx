import { useSelector } from 'react-redux';
import CartItem from '../../components/cartItem/cartItem';
import { RootState } from '../../store';
import styles from './cart.module.scss';

const Cart = () => {
  const items = useSelector((state: RootState) => state.products.items);
  const itemCount = useSelector((state: RootState) => state.products.itemCounter);
  const subTotal = useSelector((state: RootState) => state.products.subTotal);

  return (
    subTotal ? (
      <div className={styles.cart}>
        <div className={styles.cart__left}>
          {items.map((el) => (
            <CartItem
              id={el.id}
              img={el.img}
              title={el.title}
              amount={el.amount}
              price={el.price}
            />
          ))}
        </div>
        <div>
          <div className={styles.cart__right}>
            <span className={styles.cart__ordering}>{`Ordering ${itemCount} cats`}</span>
            <span className={styles.cart__total}>{`Subtotal: ${subTotal.toFixed(2)}$`}</span>
          </div>
          <button className={styles.cart__btn}>ORDER NOW</button>
        </div>
      </div>
    ) : (<h1 className={styles.cart__h1}>Empty</h1>)
  );
};

export default Cart;
