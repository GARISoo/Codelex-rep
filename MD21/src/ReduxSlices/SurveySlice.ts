/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { SurveyData, SurveyDataType } from '../Data/Survey';

const SurveySlice = createSlice({
  initialState: {
    surveyInfo: [...SurveyData] as SurveyDataType[],
  },

  name: 'survey',

  reducers: {
    resetSurvey: (state) => {
      state.surveyInfo = [...SurveyData];
    },
    makeActive: (state, action) => {
      state.surveyInfo = state.surveyInfo.map((el) => (el.id === action.payload ? { ...el, isActive: true } : { ...el }));
    },
    makeNotActive: (state, action) => {
      state.surveyInfo = state.surveyInfo.map((el) => (el.id === action.payload ? { ...el, isActive: false } : { ...el }));
    },
    addFirstAnswer: (state, action) => {
      state.surveyInfo = state.surveyInfo.map((el) => ((el.id === 1) ? { ...el, answer: action.payload } : { ...el }));
    },
    addSecondAnswer: (state, action) => {
      state.surveyInfo = state.surveyInfo.map((el) => ((el.id === 2) ? { ...el, answer: action.payload } : { ...el }));
    },
    addThirdAnswer: (state, action) => {
      state.surveyInfo = state.surveyInfo.map((el) => ((el.id === 3) ? { ...el, answer: action.payload } : { ...el }));
    },
    addFourthAnswer: (state, action) => {
      state.surveyInfo = state.surveyInfo.map((el) => ((el.id === 4) ? { ...el, answer: action.payload } : { ...el }));
    },
    addFifthAnswer: (state, action) => {
      state.surveyInfo = state.surveyInfo.map((el) => ((el.id === 5) ? { ...el, answer: action.payload } : { ...el }));
    },
  },
});

export const {
  makeActive, makeNotActive, addFirstAnswer, addSecondAnswer, addThirdAnswer, addFourthAnswer, addFifthAnswer, resetSurvey,
} = SurveySlice.actions;

export default SurveySlice.reducer;
