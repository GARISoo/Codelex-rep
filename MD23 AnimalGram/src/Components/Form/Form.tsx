import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.scss';
import type { RootState, AppDispatch } from '../../store';
import { addAnimal, toggleForm } from '../../ReduxSlices/AnimalSlice';
import { AnimalsType, checkIfValidUrl, getRandomCard } from '../../Data/AnimalStorage';

const Form = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [animal, setAnimal] = useState<AnimalsType>();
  const [error, setError] = useState(false);
  const [newSpecies, setNewSpecies] = useState(false);
  const speciesData = useSelector((state: RootState) => state.animal.species);
  const uniqueSpecies = speciesData.map((e) => e.species).filter((value, index, self) => self.indexOf(value) === index);
  const validator = () => (animal
    && (/^[a-zA-Z]+$/.test(animal.name!) && checkIfValidUrl(animal.img!)) ? setError(false) : setError(true));

  return (
    <div className={styles.container}>
      <button
        className={styles.close}
        onClick={() => dispatch(toggleForm())}
      >
        X
      </button>
      <h3 className={styles.h3}>Submit a New Animal</h3>
      <div
        className={styles.random}
        onClick={() => {
          setAnimal(getRandomCard());
          setNewSpecies(true);
        }}
      />
      <form
        action="/"
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          if (!error) {
            dispatch(addAnimal(animal));
            dispatch(toggleForm());
          }
        }}
      >
        <div className={styles.box}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Animal name"
            id="name"
            value={animal?.name}
            onChange={(e) => setAnimal({ ...animal, name: e.target.value })}
          />
        </div>

        <div className={styles.box}>
          <label htmlFor="image" className={styles.label}>Image source</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Animal image"
            id="image"
            value={animal?.img}
            onChange={(e) => setAnimal({ ...animal, img: e.target.value })}
          />
        </div>

        {newSpecies && (
        <div className={styles.box}>
          <label htmlFor="newSpecies" className={styles.label}>New species</label>
          <input
            className={styles.input}
            type="text"
            placeholder="New species"
            id="newSpecies"
            value={animal?.species}
            onChange={(e) => setAnimal({ ...animal, species: e.target.value })}
          />
          <button
            className={styles.close}
            onClick={() => setNewSpecies(false)}
          >
            X
          </button>
        </div>
        )}

        {!newSpecies && (
        <div className={styles.box}>
          <label htmlFor="specie" className={styles.label}>
            Species (
            <span
              className={styles.species}
              onClick={() => setNewSpecies(true)}
            >
              add new species
            </span>
            )
          </label>
          <select
            className={styles.input}
            onChange={(e) => setAnimal({ ...animal, species: e.target.value })}
          >
            <option value="" selected disabled>Select</option>
            {uniqueSpecies.map((el) => (
              <option value={el} key={el}>{el}</option>
            ))}
          </select>
        </div>
        )}

        <button
          className={styles.addBtn}
          type="submit"
          onClick={() => validator()}
        >
          Add animal
        </button>

        {error && (
        <p className={styles.error}>
          *Animal name must contain only letters
          <br />
          *IMG url needs to be valid
        </p>
        )}

      </form>
    </div>
  );
};

export default Form;
