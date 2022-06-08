import {
  NavLink, Route, BrowserRouter as Router, Routes,
} from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Episodes from './Pages/Episodes/Episodes';
import Episode from './Pages/Episodes/Episode';
import Characters from './Pages/Characters/Characters';
import Character from './Pages/Characters/Character';
import NotFound from './Pages/NotFound/NotFound';
import Locations from './Pages/Locations/Locations';

const App = () => (
  <Router>
    <header className="header">
      <nav className="nav">
        <NavLink className="nav__link" to="/">Home</NavLink>
        <NavLink className="nav__link" to="/about">About</NavLink>
        <NavLink className="nav__link" to="/episodes">Episodes</NavLink>
        <NavLink className="nav__link" to="/characters">Characters</NavLink>
        <NavLink className="nav__link" to="/locations">Locations</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episodes/:id" element={<Episode />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:id" element={<Character />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
