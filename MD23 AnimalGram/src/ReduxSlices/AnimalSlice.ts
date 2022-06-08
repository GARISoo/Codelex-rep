/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { AnimalsType } from '../Data/AnimalStorage';

export const animalSlice = createSlice({
  name: 'animalSlice',

  initialState: {
    animals: (localStorage.getItem('Animals') ? JSON.parse(localStorage.getItem('Animals')!) : []) as AnimalsType[],
    species: (localStorage.getItem('Animals') ? JSON.parse(localStorage.getItem('Animals')!) : []) as AnimalsType[],
    formActive: false,
  },

  reducers: {
    addAnimal: (state, action) => {
      state.animals = [...state.animals, action.payload];
      state.species = [...state.animals, action.payload];
      localStorage.setItem('Animals', JSON.stringify(state.animals));
    },
    toggleForm: (state) => {
      state.formActive = !state.formActive;
    },
    removeAnimal: (state, action) => {
      state.animals = state.animals.filter(({ name }) => name !== action.payload);
      state.species = state.species.filter(({ name }) => name !== action.payload);
      localStorage.setItem('Animals', JSON.stringify(state.animals.filter(({ name }) => (
        name !== action.payload))));
    },
    filterBySpecies: (state, action) => {
      const animalCopy = (localStorage.getItem('Animals')
        ? JSON.parse(localStorage.getItem('Animals')!) : []) as AnimalsType[];
      if (action.payload === 'All') {
        state.animals = animalCopy;
      } else {
        state.animals = animalCopy.filter(({ species }) => species === action.payload);
      }
    },
  },
});

export const {
  addAnimal, toggleForm, removeAnimal, filterBySpecies,
} = animalSlice.actions;

export default animalSlice.reducer;
