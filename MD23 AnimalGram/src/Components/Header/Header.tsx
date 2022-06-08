import { useDispatch, useSelector } from 'react-redux';
import { filterBySpecies } from '../../ReduxSlices/AnimalSlice';
import { AppDispatch, RootState } from '../../store';
import styles from './Header.module.scss';

const Header = () => {
  const speciesData = useSelector((state: RootState) => state.animal.species);
  const uniqueSpecies = speciesData.map(({ species }) => species).filter((value, index, self) => self.indexOf(value) === index);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.header}>
      {uniqueSpecies.length >= 1
      && (
      <div className={styles.filter}>
        <button
          className={styles.filterBtn}
          onClick={() => dispatch(filterBySpecies('All'))}
        >
          All
        </button>
        {uniqueSpecies.map((specie) => (
          <button
            className={styles.filterBtn}
            onClick={() => dispatch(filterBySpecies(specie))}
          >
            {specie}
          </button>
        ))}
      </div>
      )}
    </div>

  );
};

export default Header;
