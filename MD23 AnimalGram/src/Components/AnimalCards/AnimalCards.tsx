import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './AnimalCards.module.scss';
import Card from './Card';

const AnimalCards = () => {
  const animalsData = useSelector((state: RootState) => state.animal.animals);

  return (
    <div className={styles.animalWrapper}>
      {animalsData.map(({ name, img, species }) => (
        <Card name={name} img={img} species={species} />
      ))}
    </div>
  );
};

export default AnimalCards;
