import { useDispatch } from 'react-redux';
import styles from './Button.module.scss';
import { toggleForm } from '../../ReduxSlices/AnimalSlice';
import { AppDispatch } from '../../store';

const Button = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      className={styles.btn}
      onClick={() => dispatch(toggleForm())}
    >
      Add animal
    </button>
  );
};

export default Button;
