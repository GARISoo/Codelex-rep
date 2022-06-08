import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import AnimalCards from './Components/AnimalCards/AnimalCards';
import Button from './Components/Button/Button';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import { toggleForm } from './ReduxSlices/AnimalSlice';
import { AppDispatch, RootState } from './store';

const App = () => {
  const form = useSelector((state: RootState) => state.animal.formActive);

  return (
    <>
      <Header />
      <div className="main">
        <Button />
        <AnimalCards />
        {form && <Form />}
      </div>
    </>
  );
};

export default App;
