import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  makeNotActive, makeActive, addFirstAnswer, resetSurvey,
} from '../../ReduxSlices/SurveySlice';
import { RootState, AppDispatch } from '../../store';

const FirstQuestion = () => {
  const Q1 = useSelector((state: RootState) => state.survey.surveyInfo[0]);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  return (
    Q1.isActive
      ? (
        <div className="question__container">
          <form onSubmit={(e) => {
            e.preventDefault();
            if (!error) {
              dispatch(makeNotActive(Q1.id));
              dispatch(makeActive(Q1.id + 1));
              dispatch(addFirstAnswer([inputValue]));
            }
          }}
          >
            <p className="question__p">{Q1.question}</p>
            <div className="question__form">
              <label className="question__label" htmlFor="name">
                Name, Surname
                {' '}
                <span className="star"> *</span>
              </label>
              <input
                className={`question__input ${error && 'has__error'}`}
                type="text"
                id="name"
                name="name"
                placeholder="ex. John Doe"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              <span className={error ? 'error__message' : 'none'}>Both name and surname are required</span>
            </div>
            <div className="question__btns">

              <button
                className="question__btn tooltip"
                onClick={() => {
                  dispatch(resetSurvey());
                  navigate('/');
                }}
              >
                <span className="tooltiptext">Back To Home</span>
                Cancel
              </button>

              <button
                type="submit"
                disabled={inputValue === ''}
                className="question__btn"
                onClick={() => ((!inputValue.includes(' ')) ? setError(true) : setError(false))}
              >
                Next
              </button>

            </div>
          </form>
        </div>
      ) : null
  );
};

export default FirstQuestion;
