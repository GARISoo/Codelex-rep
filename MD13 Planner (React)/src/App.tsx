import './App.scss';
import TinyPlanner from './components/Planner1/TinyPlanner';
import SmollPlanner from './components/Planner2/SmollPlanner';
import NormalPlanner from './components/Planner3/NormalPlanner';
import BigPlanner from './components/Planner4/BigPlanner';
import HugePlanner from './components/Planner5/HugePlanner';
import GigaPlanner from './components/Planner6/GigaPlanner';

const App = () => (
  <div className="main">
    <TinyPlanner />
    <SmollPlanner />
    <NormalPlanner />
    <BigPlanner />
    <HugePlanner />
    <GigaPlanner />
  </div>
);

export default App;
