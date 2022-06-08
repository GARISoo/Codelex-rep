import React from 'react';
import logo from './logo.svg';
import './App.scss';
import OnlyCompletedTasks from './components/tasks/OnlyCompletedTasks';
import AllTasks from './components/tasks/AllTasks';
import AllVeggies from './components/cards/AllVeggies';
import FilteredVeggies from './components/cards/FilteredVeggies';

const App = () => (
  <div className="main">
    <div className="task__container">
      <AllTasks />
      <hr />
      <OnlyCompletedTasks />
    </div>
    <div className="cards__container">
      <AllVeggies />
      <hr />
      <FilteredVeggies />
    </div>
  </div>
);

export default App;
