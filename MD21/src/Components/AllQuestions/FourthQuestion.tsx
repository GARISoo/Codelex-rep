/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeNotActive, makeActive, addFourthAnswer } from '../../ReduxSlices/SurveySlice';
import { RootState, AppDispatch } from '../../store';

const FourthQuestion = () => {
  const Q4 = useSelector((state: RootState) => state.survey.surveyInfo[3]);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState<string[]>([]);
  const isChecked = (str: string) => inputValue.includes(str);
  const removeStr = (str: string) => setInputValue(inputValue.map((el) => (el !== str ? '' : el)));
  const addStr = (str: string) => setInputValue([...inputValue, str]);

  return (
    Q4.isActive
      ? (
        <div className="question__container">
          <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(makeNotActive(Q4.id));
            dispatch(makeActive(Q4.id + 1));
            dispatch(addFourthAnswer(inputValue));
          }}
          >
            <div className="question__form">
              <p className="question__label">
                {Q4.question}
                {' '}
                <span className="star"> *</span>
              </p>
              <div className="question__selection">
                <input
                  type="checkbox"
                  id="studies"
                  name="studies"
                  value="Studies"
                  onChange={(e) => (isChecked(e.target.value) ? removeStr(e.target.value) : addStr(e.target.value))}
                  checked={isChecked('Studies')}
                />
                <label htmlFor="studies">Studies</label>
              </div>

              <div className="question__selection">
                <input
                  type="checkbox"
                  id="debt"
                  name="debt"
                  value="Debt payments"
                  onChange={(e) => (isChecked(e.target.value) ? removeStr(e.target.value) : addStr(e.target.value))}
                  checked={isChecked('Debt payments')}
                />
                <label htmlFor="debt">Debt payments</label>
              </div>

              <div className="question__selection">
                <input
                  type="checkbox"
                  id="holidays"
                  name="holidays"
                  value="Holidays"
                  onChange={(e) => (isChecked(e.target.value) ? removeStr(e.target.value) : addStr(e.target.value))}
                  checked={isChecked('Holidays')}
                />
                <label htmlFor="holidays">Holidays</label>
              </div>

              <div className="question__selection">
                <input
                  type="checkbox"
                  id="property"
                  name="property"
                  value="Property purchase"
                  onChange={(e) => (isChecked(e.target.value) ? removeStr(e.target.value) : addStr(e.target.value))}
                  checked={isChecked('Property purchase')}
                />
                <label htmlFor="property">Property purchase</label>
              </div>

              <div className="question__selection">
                <input
                  type="checkbox"
                  id="medical"
                  name="medical"
                  value="Medical payments"
                  onChange={(e) => (isChecked(e.target.value) ? removeStr(e.target.value) : addStr(e.target.value))}
                  checked={isChecked('Medical payments')}
                />
                <label htmlFor="medical">Medical payments</label>
              </div>

              <div className="question__selection">
                <input
                  type="checkbox"
                  id="other"
                  name="other"
                  value="Other"
                  onChange={(e) => (isChecked(e.target.value) ? removeStr(e.target.value) : addStr(e.target.value))}
                  checked={isChecked('Other')}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>

            <div className="question__btns">
              <button
                className="question__btn"
                onClick={() => {
                  dispatch(makeNotActive(Q4.id));
                  dispatch(makeActive(Q4.id - 1));
                }}
              >
                Previous question
              </button>

              <button
                className="question__btn"
                type="submit"
                disabled={inputValue.length < 1}
              >
                Next question
              </button>
            </div>
          </form>
        </div>
      ) : null
  );
};

export default FourthQuestion;
