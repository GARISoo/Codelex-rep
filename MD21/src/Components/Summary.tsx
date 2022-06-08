import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RootState, AppDispatch } from '../store';
import { makeNotActive, makeActive, resetSurvey } from '../ReduxSlices/SurveySlice';

const Summary = () => {
  const surveyInfo = useSelector((state: RootState) => state.survey.surveyInfo);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const checkIfSubmitted = () => (submitted ? (
    <div className="question__container summary">
      <h1 className="intro__h1 center">You Are All Set!</h1>
      <span className="intro__ul center gap">We will let you know about our decision!</span>
      <div className="question__btns">
        <button
          className="question__btn center"
          onClick={() => {
            dispatch(resetSurvey());
            setSubmitted(true);
            navigate('/');
          }}
        >
          Home
        </button>
      </div>
    </div>
  ) : null);

  return (
    surveyInfo[5].isActive ? (
      <div className="question__container summary">
        <div>
          <b> Name, Surname:</b>
          {' '}
          <p className="summary__p uppercase"><i>{surveyInfo[0].answer}</i></p>
        </div>
        <div>
          <b>Selected age group:</b>
          {' '}
          <p className="summary__p"><i>{surveyInfo[1].answer}</i></p>
        </div>
        <div>
          <b>Current employment status:</b>
          {' '}
          <p className="summary__p"><i>{surveyInfo[2].answer}</i></p>
        </div>
        <div>
          <b>Selected reason/-s for the loan:</b>
          {' '}
          <ul className="summary__ul">
            {surveyInfo[3].answer && surveyInfo[3].answer.map((el: string) => (
              <li className="summary__li"><i>{el}</i></li>
            ))}
          </ul>
        </div>
        <div>
          <b>Provided information about your dog:</b>
          {' '}
          <p className="summary__p"><i>{surveyInfo[4].answer === '' ? 'No info given' : surveyInfo[4].answer}</i></p>
        </div>
        <div className="question__btns">
          <button
            className="question__btn"
            onClick={() => {
              dispatch(makeNotActive(6));
              dispatch(makeActive(5));
            }}
          >
            Back
          </button>
          <button
            className="question__btn"
            onClick={() => {
              dispatch(makeNotActive(6));
              setSubmitted(true);
            }}
          >
            Submit
          </button>
        </div>
        <a href="/" className="summary__cancel">Cancel</a>

      </div>
    ) : checkIfSubmitted());
};

export default Summary;
