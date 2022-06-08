import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Intro from './Components/Intro';
import SurveyQA from './Components/SurveyQA';

const App = () => (
  <Router>
    <div className="main">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/survey" element={<SurveyQA />} />
      </Routes>
    </div>
  </Router>
);

export default App;
