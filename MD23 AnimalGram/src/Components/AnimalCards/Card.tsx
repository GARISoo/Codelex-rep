import { useDispatch } from 'react-redux';
import { removeAnimal } from '../../ReduxSlices/AnimalSlice';
import { AppDispatch } from '../../store';
import styles from './AnimalCards.module.scss';

type CardProps = {
    name?: string,
    img?: string,
    species?: string,
}

const Card = ({ name, img, species }: CardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.card}>
      <img src={img} alt="img" className={styles.img} />
      <h3 className={styles.h3}>{name}</h3>
      <p className={styles.p}>{species}</p>
      <button
        className={styles.removeBtn}
        onClick={() => dispatch(removeAnimal(name))}
      >
        <span>X</span>
        <span>
          <img
            className={styles.trash}
            src="https://www.svgrepo.com/show/92600/trash-can-hand-drawn-symbol.svg"
            alt="trash"
          />
        </span>
      </button>
    </div>
  );
};

export default Card;
