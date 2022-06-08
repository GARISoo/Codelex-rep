import FirstQuestion from './AllQuestions/FirstQuestion';
import SecondQuestion from './AllQuestions/SecondQuestion';
import ThirdQuestion from './AllQuestions/ThirdQuestion';
import FourthQuestion from './AllQuestions/FourthQuestion';
import FifthQuestion from './AllQuestions/FifthQuestion';
import Summary from './Summary';
import Progress from './Progress';

const SurveyQA = () => (
  <div className="questions">
    <Progress />
    <FirstQuestion />
    <SecondQuestion />
    <ThirdQuestion />
    <FourthQuestion />
    <FifthQuestion />
    <Summary />
  </div>
);

export default SurveyQA;
