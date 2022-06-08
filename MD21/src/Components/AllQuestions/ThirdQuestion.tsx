import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeNotActive, makeActive, addThirdAnswer } from '../../ReduxSlices/SurveySlice';
import { RootState, AppDispatch } from '../../store';

const ThirdQuestion = () => {
  const Q3 = useSelector((state: RootState) => state.survey.surveyInfo[2]);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState('');

  return (
    Q3.isActive
      ? (
        <div className="question__container">

          <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(makeNotActive(Q3.id));
            dispatch(makeActive(Q3.id + 1));
            dispatch(addThirdAnswer([inputValue]));
          }}
          >
            <div className="question__form fit">
              <p className="question__label">
                {Q3.question}
                {' '}
                <span className="star"> *</span>
              </p>
              <select
                className="question__input dropdown"
                name="employment"
                id="employment"
                onChange={(e) => setInputValue(e.target.value)}
                required
              >
                <option
                  value=""
                  selected={inputValue === ''}
                  disabled
                >
                  Select Option
                </option>
                <option
                  value="Currently not employed"
                  selected={inputValue === 'Currently not employed'}
                >
                  Currently not employed
                </option>
                <option
                  value="Student"
                  selected={inputValue === 'Student'}
                >
                  Student
                </option>
                <option
                  value="Full-time"
                  selected={inputValue === 'Full-time'}
                >
                  Full-time
                </option>
                <option
                  value="Part-time"
                  selected={inputValue === 'Part-time'}
                >
                  Part-time
                </option>
              </select>
            </div>
            <div className="question__btns">
              <button
                className="question__btn"
                onClick={() => {
                  dispatch(makeNotActive(Q3.id));
                  dispatch(makeActive(Q3.id - 1));
                }}
              >
                Previous question
              </button>
              <button
                className="question__btn"
                type="submit"
                disabled={inputValue === ''}
              >
                Next question
              </button>
            </div>
          </form>
        </div>
      ) : null
  );
};

export default ThirdQuestion;
