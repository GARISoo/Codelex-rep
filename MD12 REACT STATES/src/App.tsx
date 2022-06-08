import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SimpleMath from './components/maths/simpleMath';
import MediumMath from './components/maths/mediumMath';
import PicaAdder from './components/picaAdder/PicaAdder';
import CubeChanger from './components/cubeChanger/CubeChanger';
import TextShower from './components/textShower/TextShower';
import CoolArray from './components/editableArray/CoolArray';
import Cards from './components/cards/Cardss';
import Calculator from './components/calculator/Calculators';

const App = () => (
  <div className="main">
    <SimpleMath />
    <MediumMath />
    <PicaAdder />
    <CubeChanger />
    <TextShower />
    <CoolArray />
    <Cards />
    <Calculator />
  </div>
);

export default App;
