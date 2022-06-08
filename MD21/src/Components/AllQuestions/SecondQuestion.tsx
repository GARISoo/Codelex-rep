/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeNotActive, makeActive, addSecondAnswer } from '../../ReduxSlices/SurveySlice';
import { RootState, AppDispatch } from '../../store';

const SecondQuestion = () => {
  const Q2 = useSelector((state: RootState) => state.survey.surveyInfo[1]);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState('');

  return (
    Q2.isActive
      ? (
        <div className="question__container">
          <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(makeNotActive(Q2.id));
            dispatch(makeActive(Q2.id + 1));
            dispatch(addSecondAnswer([inputValue]));
          }}
          >
            <p className="question__p">
              {Q2.question}
              {' '}
              <span className="star"> *</span>
            </p>
            <div className="question__form">
              <div className="question__selection">
                <input
                  type="radio"
                  id="child"
                  name="child"
                  value="17 years or younger"
                  checked={inputValue === '17 years or younger'}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <label htmlFor="child" className="radio__label">17 years or younger</label>
              </div>
              <div className="question__selection">
                <input
                  type="radio"
                  id="adult"
                  name="adult"
                  value="18 - 64 years"
                  checked={inputValue === '18 - 64 years'}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <label htmlFor="adult" className="radio__label">18 - 64 years</label>
              </div>
              <div className="question__selection">
                <input
                  type="radio"
                  id="senior"
                  name="senior"
                  value="65 years or older"
                  checked={inputValue === '65 years or older'}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <label htmlFor="senior" className="radio__label">65 years or older</label>
              </div>
            </div>
            <div className="question__btns">
              <button
                className="question__btn"
                onClick={() => {
                  dispatch(makeNotActive(Q2.id));
                  dispatch(makeActive(Q2.id - 1));
                }}
              >
                Previous
              </button>
              <button
                className="question__btn"
                type="submit"
                disabled={inputValue === ''}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      ) : null
  );
};

export default SecondQuestion;
