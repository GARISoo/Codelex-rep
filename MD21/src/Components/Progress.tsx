import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Progress = () => {
  const surveyInfo = useSelector((state: RootState) => state.survey.surveyInfo);

  return (
    <div className="steps">
      {surveyInfo.map((el) => {
        const checkIfActive = () => (el.isActive ? 'step__active' : '');
        const checkIfDone = () => (el.answer ? 'step__done' : '');
        const firstStep = () => (el.id === 1 ? 'invis-left' : '');
        const lastStep = () => (el.id === 5 ? 'invis-right' : '');

        return (el.id !== 6 ? (
          <div className="step">
            <div className={`step__box ${checkIfActive()} ${checkIfDone()} ${firstStep()} ${lastStep()}`}>
              {el.answer ? '' : el.id}
            </div>
            <p className={`step__p ${el.isActive && 'bold'}`}>{`Q${el.id}`}</p>
          </div>
        ) : null
        );
      })}
    </div>
  );
};

export default Progress;
