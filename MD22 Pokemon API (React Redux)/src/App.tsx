import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomePage/HomePage';
import SinglePokemon from './Pages/SinglePokemon/SinglePokemon';

const App = () => (
  <Router>
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:name" element={<SinglePokemon />} />
      </Routes>
    </div>
  </Router>
);

export default App;
