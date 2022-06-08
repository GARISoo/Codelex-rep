import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Links from './component/nav/nav';
import Buttons from './component/button/buttons';
import Cats from './component/cats/cats';
import Cards from './component/cards/cards';
import MButtons from './component/more-buttons/more-buttons';

const App = () => (
  <div>
    <Links />
    <Buttons />
    <Cats />
    <Cards />
    <MButtons />
  </div>
);

export default App;
