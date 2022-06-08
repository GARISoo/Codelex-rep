import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeNotActive, makeActive, addFifthAnswer } from '../../ReduxSlices/SurveySlice';
import { RootState, AppDispatch } from '../../store';

const FifthQuestion = () => {
  const Q5 = useSelector((state: RootState) => state.survey.surveyInfo[4]);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  return (
    Q5.isActive
      ? (
        <div className="question__container">
          <form onSubmit={(e) => {
            e.preventDefault();
            if (!error) {
              dispatch(makeNotActive(Q5.id));
              dispatch(makeActive(Q5.id + 1));
              dispatch(addFifthAnswer(inputValue));
            }
          }}
          >
            <p className="question__p">{Q5.question}</p>
            <div className="question__form fit">
              <label className="question__label" htmlFor="story">
                Description
                {' '}
                <span className="star"> *</span>
              </label>
              <textarea
                id="story"
                name="story"
                placeholder="Text goes here..."
                className={error ? 'has__error' : ''}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              <span className={error ? 'error__message' : 'none'}>At least 10 characters needed</span>
            </div>

            <div className="question__btns">
              <button
                className="question__btn"
                onClick={() => {
                  dispatch(makeNotActive(Q5.id));
                  dispatch(makeActive(Q5.id - 1));
                }}
              >
                Previous question
              </button>
              <button
                type="submit"
                className="question__btn"
                disabled={inputValue === ''}
                onClick={() => (inputValue.length === 0 || inputValue.length > 10 ? setError(false) : setError(true))}
              >
                Summary
              </button>
            </div>
          </form>
        </div>
      ) : null
  );
};

export default FifthQuestion;
